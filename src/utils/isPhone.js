const isPhone = (value) => {
  if (typeof value !== 'string') return false;
  return /^[+]?[\d\s\-().]{7,15}$/.test(value.trim());
};

export default isPhone;
