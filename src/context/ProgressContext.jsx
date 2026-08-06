import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { certifications } from '../data/certifications';
import { useAuth } from './AuthContext';

const ProgressContext = createContext();

const STORAGE_KEY = 'certpath_progress';

function loadLocalProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

function saveLocalProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
}

export function ProgressProvider({ children }) {
  const { isAuthenticated, authFetch } = useAuth();
  const [progress, setProgress] = useState(loadLocalProgress);
  const [synced, setSynced] = useState(false);

  // Save to localStorage as fallback
  useEffect(() => {
    saveLocalProgress(progress);
  }, [progress]);

  // When user logs in: sync localStorage progress to server, then load server progress
  useEffect(() => {
    if (!isAuthenticated) {
      setSynced(false);
      return;
    }

    const syncProgress = async () => {
      try {
        // If there's local progress and we haven't synced yet, push it to the server
        const localProgress = loadLocalProgress();
        const hasLocalProgress = Object.keys(localProgress).some(certId => {
          const chapters = localProgress[certId];
          return chapters && Object.values(chapters).some(v => v);
        });

        if (hasLocalProgress && !synced) {
          await authFetch('/api/progress/sync', {
            method: 'POST',
            body: JSON.stringify({ progress: localProgress }),
          });
        }

        // Fetch the authoritative progress from server
        const res = await authFetch('/api/progress');
        if (res.ok) {
          const serverProgress = await res.json();
          setProgress(serverProgress);
          setSynced(true);
        }
      } catch (err) {
        console.error('Failed to sync progress:', err.message);
        // Fall back to local progress silently
      }
    };

    syncProgress();
  }, [isAuthenticated, authFetch, synced]);

  const toggleChapter = useCallback(async (certId, chapterId) => {
    // Optimistic update locally
    setProgress(prev => {
      const certProgress = prev[certId] || {};
      const isCompleted = certProgress[chapterId];
      return {
        ...prev,
        [certId]: {
          ...certProgress,
          [chapterId]: isCompleted ? undefined : Date.now()
        }
      };
    });

    // If authenticated, also update on the server
    if (isAuthenticated) {
      try {
        const res = await authFetch(`/api/progress/${certId}/${chapterId}`, {
          method: 'PUT',
        });
        if (res.ok) {
          const { certId: returnedCertId, chapters } = await res.json();
          // Update with server's response (source of truth)
          setProgress(prev => ({
            ...prev,
            [returnedCertId]: chapters
          }));
        }
      } catch (err) {
        console.error('Failed to sync chapter toggle:', err.message);
        // Keep the optimistic update — it's already saved in localStorage
      }
    }
  }, [isAuthenticated, authFetch]);

  const isChapterCompleted = useCallback((certId, chapterId) => {
    return !!progress[certId]?.[chapterId];
  }, [progress]);

  const getCertProgress = useCallback((certId) => {
    const cert = certifications.find(c => c.id === certId);
    if (!cert) return { completed: 0, total: 0, percentage: 0 };
    
    const certProgress = progress[certId] || {};
    const completed = cert.chapters.filter(ch => certProgress[ch.id]).length;
    const total = cert.chapters.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    return { completed, total, percentage };
  }, [progress]);

  const getActiveCerts = useCallback(() => {
    return Object.keys(progress).filter(certId => {
      const certProgress = progress[certId];
      return certProgress && Object.values(certProgress).some(v => v);
    });
  }, [progress]);

  const getTotalStats = useCallback(() => {
    let totalCompleted = 0;
    let totalChapters = 0;
    let totalHours = 0;
    const activeCertIds = getActiveCerts();

    certifications.forEach(cert => {
      const certProgress = progress[cert.id] || {};
      cert.chapters.forEach(ch => {
        if (activeCertIds.includes(cert.id)) {
          totalChapters++;
          if (certProgress[ch.id]) {
            totalCompleted++;
            totalHours += ch.estimatedHours;
          }
        }
      });
    });

    return {
      chaptersCompleted: totalCompleted,
      totalChapters,
      certsInProgress: activeCertIds.length,
      hoursStudied: totalHours
    };
  }, [progress, getActiveCerts]);

  const getRecentActivity = useCallback(() => {
    const activities = [];
    Object.entries(progress).forEach(([certId, chapters]) => {
      Object.entries(chapters).forEach(([chapterId, timestamp]) => {
        if (timestamp) {
          const cert = certifications.find(c => c.id === certId);
          const chapter = cert?.chapters.find(ch => ch.id === chapterId);
          if (cert && chapter) {
            activities.push({ cert, chapter, timestamp });
          }
        }
      });
    });
    return activities.sort((a, b) => b.timestamp - a.timestamp).slice(0, 5);
  }, [progress]);

  return (
    <ProgressContext.Provider value={{
      progress,
      toggleChapter,
      isChapterCompleted,
      getCertProgress,
      getActiveCerts,
      getTotalStats,
      getRecentActivity
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within ProgressProvider');
  return context;
}
