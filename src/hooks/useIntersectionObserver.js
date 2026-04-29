import { useState, useEffect } from 'react';

const useIntersectionObserver = (ref, options = {}) => {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => setEntry(e), options);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options.threshold, options.root, options.rootMargin]);

  return entry;
};

export default useIntersectionObserver;
