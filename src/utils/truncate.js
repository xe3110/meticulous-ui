const truncate = (str, limit) => {
  if (typeof str !== 'string') return str;
  return str.length <= limit ? str : str.slice(0, limit) + '…';
};

export default truncate;
