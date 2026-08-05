import { createContext, useContext, useState, useEffect } from 'react';

const PurchaseContext = createContext();

const STORAGE_KEY = 'coursepath_purchases';

function loadPurchases() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error('Failed to load purchases:', e);
  }
  return { isPro: false, unlockedCourses: [] };
}

export function PurchaseProvider({ children }) {
  const [purchases, setPurchases] = useState(loadPurchases);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(purchases));
    } catch (e) {
      console.error('Failed to save purchases:', e);
    }
  }, [purchases]);

  // Unlock a specific course
  const unlockCourse = (certId) => {
    if (!certId) return;
    setPurchases(prev => {
      if (prev.unlockedCourses.includes(certId)) return prev;
      return {
        ...prev,
        unlockedCourses: [...prev.unlockedCourses, certId]
      };
    });
  };

  // Unlock Pro subscription (all courses)
  const unlockPro = () => {
    setPurchases(prev => ({ ...prev, isPro: true }));
  };

  // Check if a specific cert is unlocked
  const isCertUnlocked = (certId) => {
    if (purchases.isPro) return true;
    return purchases.unlockedCourses.includes(certId);
  };

  // Reset for testing
  const resetPurchases = () => {
    setPurchases({ isPro: false, unlockedCourses: [] });
  };

  return (
    <PurchaseContext.Provider
      value={{
        isPro: purchases.isPro,
        unlockedCourses: purchases.unlockedCourses,
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
