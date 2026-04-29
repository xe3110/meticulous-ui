const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

const trapFocus = (element) => {
  const el = element?.current ?? element;
  if (!el) return () => {};

  const focusable = () => [...el.querySelectorAll(FOCUSABLE)];

  const handler = (e) => {
    if (e.key !== 'Tab') return;
    const items = focusable();
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  el.addEventListener('keydown', handler);
  return () => el.removeEventListener('keydown', handler);
};

export default trapFocus;
