const kebabCase = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[_\s]+/g, '-')
    .toLowerCase();
};

export default kebabCase;
