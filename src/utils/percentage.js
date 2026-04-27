const percentage = (part, total, decimals = 2) => {
  if (typeof part !== 'number' || typeof total !== 'number' || total === 0) return 0;
  return roundTo((part / total) * 100, decimals);
};

const roundTo = (num, decimals) => {
  const factor = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
};

export default percentage;
