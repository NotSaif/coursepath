import express from 'express';
import cors from 'cors';
import crypto from 'crypto';
import { connectDB } from '../server/db.js';
import User from '../server/models/User.js';
import Order from '../server/models/Order.js';
import authRoutes from '../server/routes/auth.js';
import progressRoutes from '../server/routes/progress.js';
import userRoutes from '../server/routes/users.js';

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

// Serverless DB connection middleware
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/users', userRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    gateway: 'Lemon Squeezy + MongoDB Atlas (Vercel Serverless)',
    timestamp: new Date().toISOString()
  });
});

// Create Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { priceType, certId, certName } = req.body || {};

    const LEMON_API_KEY = process.env.LEMONSQUEEZY_API_KEY;
    const LEMON_STORE_ID = process.env.LEMONSQUEEZY_STORE_ID;

    const VARIANTS = {
      course: process.env.LEMONSQUEEZY_VARIANT_COURSE || '1986443',
      pro_monthly: process.env.LEMONSQUEEZY_VARIANT_PRO_MONTHLY || '1986447',
      pro_yearly: process.env.LEMONSQUEEZY_VARIANT_PRO_YEARLY || '1986449',
    };

    const variantId = VARIANTS[priceType || 'pro_monthly'];
    if (!variantId) {
      return res.status(400).json({ error: 'Invalid price plan type' });
    }

    if (!LEMON_API_KEY || !LEMON_STORE_ID) {
      return res.status(400).json({
        error: 'Lemon Squeezy API credentials not set in environment variables.'
      });
    }

    const clientUrl = req.headers.origin || process.env.CLIENT_URL || `https://${req.headers.host}`;

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
              redirect_url: `${clientUrl}/success?cert_id=${encodeURIComponent(certId || '')}&price_type=${encodeURIComponent(priceType || '')}`
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
      console.error('Lemon Squeezy API Error:', data);
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
    console.error('Server error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Lemon Squeezy Webhook
app.post('/api/webhook', async (req, res) => {
  try {
    const event = req.body;
    const eventName = event.meta?.event_name;
    console.log('🔔 Lemon Squeezy Webhook:', eventName);

    if (eventName === 'order_created') {
      const order = event.data?.attributes;
      const customData = event.meta?.custom_data || {};
      const customerEmail = order?.user_email;

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
      } catch (orderErr) {
        console.error('Failed to save order:', orderErr.message);
      }

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
          }
        } catch (userErr) {
          console.error('Failed to update user:', userErr.message);
        }
      }
    }

    res.json({ status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default app;
