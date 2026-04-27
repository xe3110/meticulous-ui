const addDays = (date, n) => {
  const d = date instanceof Date ? new Date(date) : new Date(date);
  d.setDate(d.getDate() + n);
  return d;
};

export default addDays;
