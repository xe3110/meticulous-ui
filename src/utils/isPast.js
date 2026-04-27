const isPast = (date) => {
  const d = date instanceof Date ? date : new Date(date);
  return d.getTime() < Date.now();
};

export default isPast;
