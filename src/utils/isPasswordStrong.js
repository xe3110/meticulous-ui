// min 8 chars, at least one uppercase, one lowercase, one digit, one special char
const isPasswordStrong = (value) => {
  if (typeof value !== 'string') return false;
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(value);
};

export default isPasswordStrong;
