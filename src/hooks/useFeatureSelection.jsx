import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const FeatureSelectionContext = createContext(null);

export function FeatureSelectionProvider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const selectFeature = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const value = useMemo(
    () => ({ activeIndex, selectFeature }),
    [activeIndex, selectFeature],
  );

  return (
    <FeatureSelectionContext.Provider value={value}>
      {children}
    </FeatureSelectionContext.Provider>
  );
}

export function useFeatureSelection() {
  const context = useContext(FeatureSelectionContext);
  if (!context) {
    throw new Error('useFeatureSelection must be used within FeatureSelectionProvider');
  }
  return context;
}
