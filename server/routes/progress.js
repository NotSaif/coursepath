import { Router } from 'express';
import Progress from '../models/Progress.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

// All progress routes require authentication
router.use(authenticate);

// ─── Get all progress for the logged-in user ───
router.get('/', async (req, res) => {
  try {
    const progressDocs = await Progress.find({ userId: req.user._id });

    // Transform to the same shape the frontend expects:
    // { "comptia-security-plus": { "sec-ch1": timestamp, "sec-ch2": timestamp }, ... }
    const progress = {};
    progressDocs.forEach(doc => {
      const chapters = {};
      if (doc.chapters) {
        for (const [chapterId, timestamp] of doc.chapters.entries()) {
          chapters[chapterId] = timestamp ? timestamp.getTime() : undefined;
        }
      }
      progress[doc.certId] = chapters;
    });

    res.json(progress);
  } catch (error) {
    console.error('Get progress error:', error.message);
    res.status(500).json({ error: 'Failed to fetch progress' });
  }
});

// ─── Toggle a chapter's completion ───
router.put('/:certId/:chapterId', async (req, res) => {
  try {
    const { certId, chapterId } = req.params;
    const userId = req.user._id;

    // Find or create the progress document for this cert
    let progressDoc = await Progress.findOne({ userId, certId });

    if (!progressDoc) {
      progressDoc = new Progress({ userId, certId, chapters: new Map() });
    }

    // Toggle: if already completed → remove, otherwise → set timestamp
    if (progressDoc.chapters.get(chapterId)) {
      progressDoc.chapters.delete(chapterId);
    } else {
      progressDoc.chapters.set(chapterId, new Date());
    }

    progressDoc.updatedAt = new Date();
    await progressDoc.save();

    // Return the updated chapters for this cert
    const chapters = {};
    for (const [id, timestamp] of progressDoc.chapters.entries()) {
      chapters[id] = timestamp ? timestamp.getTime() : undefined;
    }

    res.json({ certId, chapters });
  } catch (error) {
    console.error('Toggle chapter error:', error.message);
    res.status(500).json({ error: 'Failed to update progress' });
  }
});

// ─── Bulk save progress (for syncing localStorage → DB on first login) ───
router.post('/sync', async (req, res) => {
  try {
    const { progress } = req.body; // Same shape as localStorage: { certId: { chapterId: timestamp } }
    const userId = req.user._id;

    if (!progress || typeof progress !== 'object') {
      return res.status(400).json({ error: 'Invalid progress data' });
    }

    const operations = [];

    for (const [certId, chapters] of Object.entries(progress)) {
      if (!chapters || typeof chapters !== 'object') continue;

      const chapterMap = new Map();
      for (const [chapterId, timestamp] of Object.entries(chapters)) {
        if (timestamp) {
          chapterMap.set(chapterId, new Date(timestamp));
        }
      }

      operations.push(
        Progress.findOneAndUpdate(
          { userId, certId },
          {
            $set: { chapters: chapterMap, updatedAt: new Date() },
            $setOnInsert: { userId, certId }
          },
          { upsert: true, new: true }
        )
      );
    }

    await Promise.all(operations);
    res.json({ message: 'Progress synced successfully' });
  } catch (error) {
    console.error('Sync progress error:', error.message);
    res.status(500).json({ error: 'Failed to sync progress' });
  }
});

export default router;
