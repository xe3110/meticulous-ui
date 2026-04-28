const focusElement = (ref) => {
  const el = ref?.current ?? ref;
  el?.focus();
};

export default focusElement;
