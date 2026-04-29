const fuzzySearch = (data, query) => {
  if (!query) return data;
  const q = query.toLowerCase();
  const matches = (str) => {
    let i = 0;
    const s = str.toLowerCase();
    for (const ch of q) {
      i = s.indexOf(ch, i);
      if (i === -1) return false;
      i++;
    }
    return true;
  };
  return data.filter((item) => {
    if (typeof item === 'string') return matches(item);
    return Object.values(item).some((v) => typeof v === 'string' && matches(v));
  });
};

export default fuzzySearch;
