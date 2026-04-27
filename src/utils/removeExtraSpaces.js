const removeExtraSpaces = (str) => {
  if (typeof str !== 'string') return str;
  return str.trim().replace(/\s+/g, ' ');
};

export default removeExtraSpaces;
