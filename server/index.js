import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { connectDB } from './db.js';
import User from './models/User.js';
import Order from './models/Order.js';
import authRoutes from './routes/auth.js';
import progressRoutes from './routes/progress.js';
import userRoutes from './routes/users.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3001;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// Lemon Squeezy Config
const LEMON_API_KEY = process.env.LEMONSQUEEZY_API_KEY;
const LEMON_STORE_ID = process.env.LEMONSQUEEZY_STORE_ID;
const LEMON_WEBHOOK_SECRET = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;

// Product Variant IDs in Lemon Squeezy
const VARIANTS = {
  course: process.env.LEMONSQUEEZY_VARIANT_COURSE || 'placeholder_variant_course',
  pro_monthly: process.env.LEMONSQUEEZY_VARIANT_PRO_MONTHLY || 'placeholder_variant_monthly',
  pro_yearly: process.env.LEMONSQUEEZY_VARIANT_PRO_YEARLY || 'placeholder_variant_yearly',
};

app.use(express.json());
app.use(cors({ origin: CLIENT_URL }));

// ─── Connect to MongoDB ───
await connectDB();

// ─── Mount API Routes ───
app.use('/api/auth', authRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/users', userRoutes);

// ─── Health Check ───
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    db: 'connected',
    gateway: 'Lemon Squeezy (Merchant of Record - No CR Required 🚀)',
    timestamp: new Date().toISOString()
  });
});

// ─── Create Checkout Session (Lemon Squeezy) ───
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { priceType, certId, certName } = req.body;

    const variantId = VARIANTS[priceType || 'pro_monthly'];
    if (!variantId) {
      return res.status(400).json({ error: 'Invalid price plan type' });
    }

    // Check if Lemon Squeezy keys are set
    if (!LEMON_API_KEY || !LEMON_STORE_ID || variantId.includes('placeholder')) {
      console.warn('⚠️ Lemon Squeezy API keys or Variant IDs not configured in .env file!');
      return res.status(400).json({
        error: 'Lemon Squeezy API credentials not set. Sign up at https://lemonsqueezy.com, grab your API Key, Store ID & Product Variant ID, and set them in your .env file.',
        setup_url: 'https://lemonsqueezy.com'
      });
    }

    // Call Lemon Squeezy Checkouts API
    // Documentation: https://docs.lemonsqueezy.com/api/checkouts#create-a-checkout
    const response = await fetch('https://api.lemonsqueezy.com/v1/checkouts', {
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Authorization': `Bearer ${LEMON_API_KEY}`
      },
      body: JSON.stringify({
        data: {
          type: 'checkouts',
          attributes: {
            checkout_data: {
              custom: {
                cert_id: (certId || 'none').toString(),
                price_type: (priceType || 'pro_monthly').toString(),
                cert_name: (certName || 'CoursePath Pro').toString()
              }
            },
            product_options: {
              redirect_url: `${CLIENT_URL}/success`
            }
          },
          relationships: {
            store: {
              data: {
                type: 'stores',
                id: LEMON_STORE_ID.toString()
              }
            },
            variant: {
              data: {
                type: 'variants',
                id: variantId.toString()
              }
            }
          }
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ Lemon Squeezy API Error:', data);
      return res.status(response.status).json({
        error: data.errors?.[0]?.detail || data.message || 'Failed to create checkout session'
      });
    }

    const checkoutUrl = data.data?.attributes?.url;
    if (checkoutUrl) {
      res.json({ url: checkoutUrl });
    } else {
      res.status(500).json({ error: 'No checkout URL returned from Lemon Squeezy' });
    }

  } catch (err) {
    console.error('❌ Server Error creating checkout:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ─── Lemon Squeezy Webhook Endpoint ───
app.post('/api/webhook', async (req, res) => {
  try {
    const rawBody = JSON.stringify(req.body);
    const hmac = crypto.createHmac('sha256', LEMON_WEBHOOK_SECRET || '');
    const digest = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8');
    const signature = Buffer.from(req.headers['x-signature'] || '', 'utf8');

    if (LEMON_WEBHOOK_SECRET && !crypto.timingSafeEqual(digest, signature)) {
      return res.status(400).send('Invalid signature');
    }

    const event = req.body;
    const eventName = event.meta?.event_name;
    console.log('🔔 Lemon Squeezy Webhook:', eventName);

    if (eventName === 'order_created') {
      const order = event.data?.attributes;
      const customData = event.meta?.custom_data || {};
      const customerEmail = order?.user_email;

      console.log('✅ Order successful:', order?.identifier);
      console.log('   Customer:', customerEmail);
      console.log('   Total:', order?.total_formatted);

      // Save order to database
      const priceType = customData.price_type || 'pro_monthly';
      const certId = customData.cert_id || null;

      try {
        await Order.create({
          orderId: order?.identifier || `ls_${Date.now()}`,
          email: customerEmail,
          priceType,
          certId: certId !== 'none' ? certId : null,
          certName: customData.cert_name || null,
          amount: order?.total_formatted || null,
          status: 'completed',
          provider: 'lemonsqueezy'
        });
        console.log('   📦 Order saved to database');
      } catch (orderErr) {
        console.error('   ⚠️ Failed to save order:', orderErr.message);
      }

      // Update user's purchase status if they have an account
      if (customerEmail) {
        try {
          const user = await User.findOne({ email: customerEmail.toLowerCase() });
          if (user) {
            if (priceType === 'pro_monthly' || priceType === 'pro_yearly') {
              user.isPro = true;
            } else if (priceType === 'course' && certId && certId !== 'none') {
              if (!user.unlockedCourses.includes(certId)) {
                user.unlockedCourses.push(certId);
              }
            }
            await user.save();
            console.log('   👤 User purchase status updated');
          } else {
            console.log('   ℹ️ No registered user found for this email — order saved for later');
          }
        } catch (userErr) {
          console.error('   ⚠️ Failed to update user:', userErr.message);
        }
      }
    }

    res.json({ status: 'success' });
  } catch (err) {
    console.error('Webhook error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ─── Serve Static Files in Production ───
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '..', 'dist');
  app.use(express.static(distPath));

  app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(distPath, 'index.html'));
    }
  });
}

app.listen(PORT, () => {
  console.log(`\n🚀 CertPath API server running on port ${PORT}`);
  console.log(`   Database: MongoDB Atlas ✅`);
  console.log(`   Gateway: Lemon Squeezy (Merchant of Record - No CR Needed!)`);
  console.log(`   Supports: Apple Pay + Google Pay + All Credit/Debit Cards`);
  console.log(`   Client URL: ${CLIENT_URL}\n`);
});
