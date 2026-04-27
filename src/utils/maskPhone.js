const maskPhone = (str) => {
  if (typeof str !== 'string') return str;
  const digits = str.replace(/\D/g, '');
  const maskUntil = Math.max(0, digits.length - 4);
  let count = 0;
  return str.replace(/\d/g, () => (count++ < maskUntil ? '*' : digits[count - 1]));
};

export default maskPhone;
