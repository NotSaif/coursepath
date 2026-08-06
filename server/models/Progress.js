import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  certId: {
    type: String,
    required: true
  },
  chapters: {
    type: Map,
    of: Date,      // chapterId → completion timestamp
    default: {}
  }
}, {
  timestamps: true // adds createdAt and updatedAt
});

// Compound index: one progress doc per user per cert
progressSchema.index({ userId: 1, certId: 1 }, { unique: true });

// Index for fetching all progress for a user
progressSchema.index({ userId: 1 });

const Progress = mongoose.model('Progress', progressSchema);

export default Progress;
