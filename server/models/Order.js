import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null       // may be null if user not found by email
  },
  orderId: {
    type: String,        // Lemon Squeezy order identifier
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  priceType: {
    type: String,
    enum: ['course', 'pro_monthly', 'pro_yearly'],
    required: true
  },
  certId: {
    type: String,
    default: null        // only set for single course purchases
  },
  certName: {
    type: String,
    default: null
  },
  amount: {
    type: String,        // formatted total from Lemon Squeezy, e.g. "$9.99"
    default: null
  },
  status: {
    type: String,
    enum: ['completed', 'refunded', 'pending'],
    default: 'completed'
  },
  provider: {
    type: String,
    default: 'lemonsqueezy'
  }
}, {
  timestamps: true
});

// Index for looking up orders by user
orderSchema.index({ userId: 1 });
orderSchema.index({ email: 1 });

const Order = mongoose.model('Order', orderSchema);

export default Order;
