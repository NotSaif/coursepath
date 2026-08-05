# CertPath — Certification Roadmap Platform

A bilingual (Arabic + English) web platform that curates free certification resources into structured roadmaps. Helps job seekers and students navigate professional certifications with free videos, PDFs, and progress tracking.

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org) v18+
- A [Stripe account](https://stripe.com) (free to sign up)

### Setup

```bash
# Clone the repo
git clone https://github.com/NotSaif/certpath.git
cd certpath

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Stripe API keys (see below)
```

### Get Your Stripe Keys

1. Go to [Stripe Dashboard → API Keys](https://dashboard.stripe.com/test/apikeys)
2. Copy your **Secret key** (`sk_test_...`) and **Publishable key** (`pk_test_...`)
3. Paste them in your `.env` file

### Create Stripe Products

1. Go to [Stripe Dashboard → Products](https://dashboard.stripe.com/test/products)
2. Create 3 products:
   - **Single Course** — One-time payment, $4.99
   - **Pro Monthly** — Recurring monthly, $9.99/month
   - **Pro Yearly** — Recurring yearly, $83.88/year
3. Copy each Price ID (`price_...`) into your `.env` file

### Run

```bash
# Start both frontend + backend
npm run dev

# Frontend: http://localhost:5173
# Backend:  http://localhost:3001
```

### Run Frontend Only (no payments)

```bash
npm run dev:client
```

## 💳 Payment Integration

- **Stripe Checkout** — Handles Apple Pay, Google Pay, and card payments automatically
- **Apple Pay** — Works automatically on Safari/iOS via Stripe Checkout
- **Google Pay** — Works automatically on Chrome via Stripe Checkout
- **Webhooks** — Handles `checkout.session.completed`, subscription updates/cancellations

### Webhook Setup (Production)

1. Go to [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/test/webhooks)
2. Add endpoint: `https://yourdomain.com/api/webhook`
3. Select events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`
4. Copy the webhook signing secret to your `.env` as `STRIPE_WEBHOOK_SECRET`

### Apple Pay (Production)

1. In Stripe Dashboard → Settings → Payment Methods → Apple Pay
2. Add your domain
3. Download the verification file
4. Place at `public/.well-known/apple-developer-merchantid-domain-association`

## 🏗️ Project Structure

```
certpath/
├── server/                  # Express backend
│   ├── index.js             # API server (Stripe endpoints)
│   └── stripe-products.js   # Price ID configuration
├── src/                     # React frontend
│   ├── components/          # Reusable UI components
│   ├── pages/               # Page components
│   ├── context/             # React contexts (language, progress)
│   ├── data/                # Certification data
│   └── i18n/                # Translations (en/ar)
├── .env.example             # Environment variables template
└── package.json
```

## 🌐 Features

- **5 Certifications**: Security+, AWS CCP, Google Data Analytics, CAPM, CCNA
- **Bilingual**: Full Arabic + English with RTL support
- **Progress Tracking**: Chapter completion with localStorage
- **Payment**: Stripe Checkout with Apple Pay & Google Pay
- **Responsive**: Mobile-first design
- **Premium UI**: Dark theme, glassmorphism, micro-animations

## 📦 Deploy to Production

```bash
# Build frontend
npm run build

# Start production server (serves frontend + API)
npm start
```

Deploy to any Node.js host (Render, Railway, Fly.io, DigitalOcean, etc.) or use Vercel with serverless functions.

## 🧪 Test Payments

Use Stripe test card: `4242 4242 4242 4242` with any future expiry date and any CVC.

## License

MIT
