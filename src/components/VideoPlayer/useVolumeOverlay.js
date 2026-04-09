import { useState, useRef, useCallback } from 'react';

export const useVolumeOverlay = () => {
  const [volume, setVolume] = useState(null);
  const timerRef = useRef(null);

  const showVolume = useCallback((vol) => {
    setVolume(Math.round(vol * 100));
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVolume(null), 1500);
  }, []);

  return { volume, showVolume };
};
