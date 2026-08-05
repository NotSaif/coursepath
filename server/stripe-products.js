// Stripe Product & Price ID Configuration
// ------------------------------------------
// Create these in your Stripe Dashboard:
// 1. Go to https://dashboard.stripe.com/test/products
// 2. Click "+ Add product" for each plan
// 3. Copy the Price IDs (start with price_...)
// 4. Paste them below
//
// For testing, you can use Stripe's test mode.
// For production, switch to live keys in your .env file.

export const PRICES = {
  // Single Course — $4.99 one-time payment
  // Create as: "Single Course" → One-time → $4.99
  course: process.env.STRIPE_PRICE_COURSE || 'price_course_placeholder',

  // Pro Monthly — $9.99/month recurring
  // Create as: "Pro Monthly" → Recurring (Monthly) → $9.99
  pro_monthly: process.env.STRIPE_PRICE_PRO_MONTHLY || 'price_pro_monthly_placeholder',

  // Pro Yearly — $83.88/year recurring (30% discount)
  // Create as: "Pro Yearly" → Recurring (Yearly) → $83.88
  pro_yearly: process.env.STRIPE_PRICE_PRO_YEARLY || 'price_pro_yearly_placeholder',
};

// Maps the priceType from the frontend to Stripe checkout mode
export function getCheckoutMode(priceType) {
  if (priceType === 'course') return 'payment';        // One-time payment
  return 'subscription';                                // Monthly/yearly subscriptions
}
