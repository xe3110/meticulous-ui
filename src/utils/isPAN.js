// Indian Permanent Account Number: 5 letters, 4 digits, 1 letter (case-insensitive)
const isPAN = (value) => {
  if (typeof value !== 'string') return false;
  return /^[A-Z]{5}[0-9]{4}[A-Z]$/i.test(value.trim());
};

export default isPAN;
