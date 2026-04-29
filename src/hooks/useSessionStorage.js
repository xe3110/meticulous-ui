import { useState } from 'react';

const useSessionStorage = (key, initialValue) => {
  const [stored, setStored] = useState(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value) => {
    const next = typeof value === 'function' ? value(stored) : value;
    setStored(next);
    try {
      sessionStorage.setItem(key, JSON.stringify(next));
    } catch {}
  };

  const remove = () => {
    setStored(initialValue);
    try {
      sessionStorage.removeItem(key);
    } catch {}
  };

  return [stored, setValue, remove];
};

export default useSessionStorage;
