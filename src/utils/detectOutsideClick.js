const detectOutsideClick = (ref, callback) => {
  const handler = (e) => {
    const el = ref?.current ?? ref;
    if (el && !el.contains(e.target)) callback(e);
  };
  document.addEventListener('mousedown', handler);
  return () => document.removeEventListener('mousedown', handler);
};

export default detectOutsideClick;
