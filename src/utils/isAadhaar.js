// Indian Aadhaar: exactly 12 digits, first digit non-zero
const isAadhaar = (value) => {
  if (typeof value !== 'string') return false;
  const digits = value.replace(/\s/g, '');
  return /^[1-9]\d{11}$/.test(digits);
};

export default isAadhaar;
