const rafThrottle = (fn) => {
  let rafId = null;
  return (...args) => {
    if (rafId !== null) return;
    rafId = requestAnimationFrame(() => {
      fn(...args);
      rafId = null;
    });
  };
};

export default rafThrottle;
