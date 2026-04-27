const roundTo = (num, decimals = 0) => {
  if (typeof num !== 'number') return num;
  const factor = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
};

export default roundTo;
