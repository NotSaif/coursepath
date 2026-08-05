import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import path from 'path';
import { fileURLToPath } from 'url';
import { PRICES, getCheckoutMode } from './stripe-products.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─── Validate Environment ───
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('\n❌  STRIPE_SECRET_KEY is not set!');
  console.error('   Copy .env.example to .env and add your Stripe keys.');
  console.error('   Get keys from: https://dashboard.stripe.com/test/apikeys\n');
  process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();
const PORT = process.env.PORT || 3001;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// ─── Middleware ───

// Stripe webhooks need raw body — must be BEFORE express.json()
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    if (webhookSecret) {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } else {
      // If no webhook secret configured, parse directly (dev mode only)
      event = JSON.parse(req.body.toString());
      console.warn('⚠️  No STRIPE_WEBHOOK_SECRET set — webhook signature not verified');
    }
  } catch (err) {
    console.error('❌ Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      console.log('✅ Payment successful!');
      console.log('   Customer email:', session.customer_details?.email);
      console.log('   Amount:', session.amount_total / 100, session.currency?.toUpperCase());
      console.log('   Mode:', session.mode);
      console.log('   Session ID:', session.id);

      // TODO: Update your database here
      // - Mark the user's course/subscription as active
      // - Send confirmation email
      // - Grant access to locked chapters
      break;
    }

    case 'customer.subscription.updated': {
      const subscription = event.data.object;
      console.log('📋 Subscription updated:', subscription.id, '→', subscription.status);
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object;
      console.log('🚫 Subscription cancelled:', subscription.id);
      // TODO: Revoke access
      break;
    }

    default:
      console.log(`ℹ️  Unhandled event: ${event.type}`);
  }

  res.json({ received: true });
});

// JSON parsing for all other routes
app.use(express.json());
app.use(cors({ origin: CLIENT_URL }));

// ─── API Routes ───

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Create a Stripe Checkout session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { priceType, certId, certName } = req.body;

    // Validate priceType
    if (!priceType || !PRICES[priceType]) {
      return res.status(400).json({
        error: `Invalid priceType. Must be one of: ${Object.keys(PRICES).join(', ')}`
      });
    }

    const priceId = PRICES[priceType];
    const mode = getCheckoutMode(priceType);

    // Check if using placeholder price IDs
    if (priceId.includes('placeholder')) {
      return res.status(400).json({
        error: 'Stripe Price IDs not configured. Create products in Stripe Dashboard and update server/stripe-products.js or set environment variables.',
        setup_url: 'https://dashboard.stripe.com/test/products'
      });
    }

    // Build session configuration
    const sessionConfig = {
      mode,
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${CLIENT_URL}/cancel`,
      // Apple Pay & Google Pay are enabled automatically
      // when "card" payment method is included and the
      // customer's device/browser supports it
      payment_method_options: {
        card: {
          setup_future_usage: mode === 'subscription' ? undefined : undefined,
        },
      },
      // Allow promotion codes
      allow_promotion_codes: true,
      // Billing address collection
      billing_address_collection: 'auto',
      // Metadata for tracking
      metadata: {
        certId: certId || '',
        certName: certName || '',
        priceType,
      },
    };

    // For subscriptions, let Stripe create the customer automatically
    if (mode === 'subscription') {
      sessionConfig.subscription_data = {
        metadata: {
          certId: certId || '',
          priceType,
        },
      };
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    res.json({ url: session.url });
  } catch (err) {
    console.error('❌ Error creating checkout session:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Get session details (for success page)
app.get('/api/checkout-session/:sessionId', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.sessionId);
    res.json({
      status: session.payment_status,
      customerEmail: session.customer_details?.email,
      amountTotal: session.amount_total,
      currency: session.currency,
      metadata: session.metadata,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─── Serve Static Files in Production ───
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '..', 'dist');
  app.use(express.static(distPath));

  // SPA fallback — serve index.html for all non-API routes
  app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(distPath, 'index.html'));
    }
  });
}

// ─── Start Server ───
app.listen(PORT, () => {
  console.log(`\n🚀 CertPath API server running on port ${PORT}`);
  console.log(`   Client URL: ${CLIENT_URL}`);
  console.log(`   Stripe mode: ${process.env.STRIPE_SECRET_KEY?.startsWith('sk_live') ? '🟢 LIVE' : '🟡 TEST'}`);
  console.log(`   Webhook secret: ${process.env.STRIPE_WEBHOOK_SECRET ? '✅ Configured' : '⚠️  Not set'}\n`);
});
