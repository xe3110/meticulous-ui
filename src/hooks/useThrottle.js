import { useState, useRef, useEffect } from 'react';

const useThrottle = (value, delay) => {
  const [throttled, setThrottled] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const remaining = delay - (Date.now() - lastRan.current);
    const id = setTimeout(
      () => {
        setThrottled(value);
        lastRan.current = Date.now();
      },
      Math.max(0, remaining)
    );
    return () => clearTimeout(id);
  }, [value, delay]);

  return throttled;
};

export default useThrottle;
