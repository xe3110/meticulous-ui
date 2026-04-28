const minLength = (value, n) => {
  if (typeof value !== 'string') return false;
  return value.length >= n;
};

export default minLength;
