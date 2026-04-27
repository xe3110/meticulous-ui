const camelCase = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .trim()
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ''));
};

export default camelCase;
