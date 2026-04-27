const snakeCase = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[-\s]+/g, '_')
    .toLowerCase();
};

export default snakeCase;
