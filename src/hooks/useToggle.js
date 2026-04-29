import { useState, useCallback } from 'react';

const useToggle = (initial = false) => {
  const [value, setValue] = useState(initial);
  const toggle = useCallback((next) => {
    setValue((v) => (typeof next === 'boolean' ? next : !v));
  }, []);
  return [value, toggle];
};

export default useToggle;
