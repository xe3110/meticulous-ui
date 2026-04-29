import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [stored, setStored] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value) => {
    const next = typeof value === 'function' ? value(stored) : value;
    setStored(next);
    try {
      localStorage.setItem(key, JSON.stringify(next));
    } catch {}
  };

  const remove = () => {
    setStored(initialValue);
    try {
      localStorage.removeItem(key);
    } catch {}
  };

  return [stored, setValue, remove];
};

export default useLocalStorage;
