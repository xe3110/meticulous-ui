const measureElement = (ref) => {
  const el = ref?.current ?? ref;
  if (!el) return null;
  return el.getBoundingClientRect();
};

export default measureElement;
