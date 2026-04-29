const smoothScroll = (target, duration = 500) => {
  const start = window.scrollY;
  const end =
    typeof target === 'number'
      ? target
      : ((target instanceof Element
          ? target
          : document.querySelector(target)
        )?.getBoundingClientRect().top + window.scrollY ?? 0);
  const distance = end - start;
  let startTime = null;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    window.scrollTo(0, start + distance * ease);
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

export default smoothScroll;
