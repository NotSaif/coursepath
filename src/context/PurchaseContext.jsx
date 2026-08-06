import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const PurchaseContext = createContext();

const STORAGE_KEY = 'coursepath_purchases';

function loadLocalPurchases() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error('Failed to load purchases:', e);
  }
  return { isPro: false, unlockedCourses: [] };
}

export function PurchaseProvider({ children }) {
  const { isAuthenticated, user, updateUser } = useAuth();
  const [localPurchases, setLocalPurchases] = useState(loadLocalPurchases);

  // Save local purchases to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(localPurchases));
    } catch (e) {
      console.error('Failed to save purchases:', e);
    }
  }, [localPurchases]);

  // When authenticated, use the user's purchase data from the server
  const isPro = isAuthenticated ? (user?.isPro || false) : localPurchases.isPro;
  const unlockedCourses = isAuthenticated
    ? (user?.unlockedCourses || [])
    : localPurchases.unlockedCourses;

  // Unlock a specific course
  const unlockCourse = (certId) => {
    if (!certId) return;
    if (isAuthenticated) {
      // Update user state (server will be updated by webhook)
      const currentCourses = user?.unlockedCourses || [];
      if (!currentCourses.includes(certId)) {
        updateUser({ unlockedCourses: [...currentCourses, certId] });
      }
    } else {
      setLocalPurchases(prev => {
        if (prev.unlockedCourses.includes(certId)) return prev;
        return {
          ...prev,
          unlockedCourses: [...prev.unlockedCourses, certId]
        };
      });
    }
  };

  // Unlock Pro subscription (all courses)
  const unlockPro = () => {
    if (isAuthenticated) {
      updateUser({ isPro: true });
    } else {
      setLocalPurchases(prev => ({ ...prev, isPro: true }));
    }
  };

  // Check if a specific cert is unlocked
  const isCertUnlocked = (certId) => {
    if (isPro) return true;
    return unlockedCourses.includes(certId);
  };

  // Reset for testing
  const resetPurchases = () => {
    setLocalPurchases({ isPro: false, unlockedCourses: [] });
    if (isAuthenticated) {
      updateUser({ isPro: false, unlockedCourses: [] });
    }
  };

  return (
    <PurchaseContext.Provider
      value={{
        isPro,
        unlockedCourses,
        unlockCourse,
        unlockPro,
        isCertUnlocked,
        resetPurchases
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
}

export function usePurchase() {
  const context = useContext(PurchaseContext);
  if (!context) {
    throw new Error('usePurchase must be used within a PurchaseProvider');
  }
  return context;
}
