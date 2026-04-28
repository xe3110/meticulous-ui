const scrollToElement = (id, behavior = 'smooth') => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior, block: 'start' });
};

export default scrollToElement;
