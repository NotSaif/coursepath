import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
import User from '../models/User.js';

const router = Router();

// All user routes require authentication
router.use(authenticate);

// ─── Get current user profile ───
router.get('/me', async (req, res) => {
  try {
    res.json({
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      language: req.user.language,
      isPro: req.user.isPro,
      unlockedCourses: req.user.unlockedCourses,
      createdAt: req.user.createdAt
    });
  } catch (error) {
    console.error('Get profile error:', error.message);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// ─── Update user profile (language preference) ───
router.put('/me', async (req, res) => {
  try {
    const { name, language } = req.body;
    const updates = {};

    if (name) updates.name = name;
    if (language && ['en', 'ar'].includes(language)) updates.language = language;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ error: 'No valid fields to update' });
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: updates },
      { new: true, runValidators: true }
    ).select('-password');

    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      language: user.language,
      isPro: user.isPro,
      unlockedCourses: user.unlockedCourses
    });
  } catch (error) {
    console.error('Update profile error:', error.message);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

export default router;
