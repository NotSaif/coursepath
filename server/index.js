import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3001;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// Tap Payments API Key (Test key starts with sk_test_...)
const TAP_SECRET_KEY = process.env.TAP_SECRET_KEY || 'sk_test_XDiagnosis_Tap_Placeholder_Key';

// Pricing Amounts & Currencies
const PLAN_AMOUNTS = {
  course: { amount: 4.99, currency: 'USD', name: 'Single Course Access' },
  pro_monthly: { amount: 9.99, currency: 'USD', name: 'Pro Subscription (Monthly)' },
  pro_yearly: { amount: 83.88, currency: 'USD', name: 'Pro Subscription (Yearly)' },
};

app.use(express.json());
app.use(cors({ origin: CLIENT_URL }));

// ─── Health Check ───
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    gateway: 'Tap Payments (GCC / Bahrain 🇧🇭)',
    timestamp: new Date().toISOString()
  });
});

// ─── Create Checkout Session (Tap Payments) ───
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { priceType, certId, certName } = req.body;

    const plan = PLAN_AMOUNTS[priceType || 'pro_monthly'];
    if (!plan) {
      return res.status(400).json({ error: 'Invalid price plan type' });
    }

    // Check if TAP key is set
    if (!process.env.TAP_SECRET_KEY) {
      console.warn('⚠️  TAP_SECRET_KEY is not set in .env file!');
    }

    // Call Tap Payments Charge API
    // Documentation: https://developers.tap.company/reference/charges
    const response = await fetch('https://api.tap.company/v2/charges', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TAP_SECRET_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: plan.amount,
        currency: plan.currency,
        threeDSecure: true,
        save_card: false,
        description: certName ? `CertPath: ${certName}` : plan.name,
        statement_descriptor: 'CertPath',
        metadata: {
          certId: certId || '',
          priceType: priceType || 'pro_monthly',
        },
        reference: {
          transaction: `txn_${Date.now()}`,
          order: `ord_${Date.now()}`
        },
        receipt: {
          email: true,
          sms: false
        },
        customer: {
          first_name: 'CertPath',
          last_name: 'Student',
          email: 'student@certpath.io'
        },
        source: {
          id: 'src_all' // Enables Apple Pay, BenefitPay, Mada, and Credit/Debit Cards!
        },
        redirect: {
          url: `${CLIENT_URL}/success`
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle Tap API error
      console.error('❌ Tap API Error:', data);
      return res.status(response.status).json({
        error: data.errors?.[0]?.description || data.message || 'Failed to create payment link'
      });
    }

    // Return the payment checkout URL
    const paymentUrl = data.transaction?.url;
    if (paymentUrl) {
      res.json({ url: paymentUrl, chargeId: data.id });
    } else {
      res.status(500).json({ error: 'No transaction URL returned from payment provider' });
    }

  } catch (err) {
    console.error('❌ Server Error during checkout creation:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ─── Tap Webhook Endpoint ───
app.post('/api/webhook', (req, res) => {
  const event = req.body;
  console.log('🔔 Tap Webhook event received:', event?.status, event?.id);

  if (event?.status === 'CAPTURED') {
    console.log('✅ Payment captured successfully for charge:', event.id);
    console.log('   Amount:', event.amount, event.currency);
    console.log('   Customer:', event.customer?.email);
    console.log('   Metadata:', event.metadata);
  }

  res.json({ status: 'success' });
});

// ─── Get Charge Details ───
app.get('/api/checkout-session/:chargeId', async (req, res) => {
  try {
    const { chargeId } = req.params;
    const response = await fetch(`https://api.tap.company/v2/charges/${chargeId}`, {
      headers: {
        'Authorization': `Bearer ${TAP_SECRET_KEY}`
      }
    });

    const data = await response.json();
    res.json({
      status: data.status === 'CAPTURED' ? 'paid' : data.status,
      customerEmail: data.customer?.email,
      amountTotal: Math.round(data.amount * 100),
      currency: data.currency,
      metadata: data.metadata
    });
  } catch (err) {
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
  console.log(`\n🇧🇭 CertPath API server running on port ${PORT}`);
  console.log(`   Gateway: Tap Payments (Apple Pay + BenefitPay + GCC Cards)`);
  console.log(`   Client URL: ${CLIENT_URL}\n`);
});
