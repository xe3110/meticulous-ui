const uniqueBy = (array, key) => {
  const seen = new Set();
  return array.filter((item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
};

export default uniqueBy;
