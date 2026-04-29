const multiSort = (data, config) =>
  [...data].sort((a, b) => {
    for (const { key, order = 'asc' } of config) {
      const av = typeof key === 'function' ? key(a) : a[key];
      const bv = typeof key === 'function' ? key(b) : b[key];
      if (av < bv) return order === 'asc' ? -1 : 1;
      if (av > bv) return order === 'asc' ? 1 : -1;
    }
    return 0;
  });

export default multiSort;
