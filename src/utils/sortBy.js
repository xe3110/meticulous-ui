const sortBy = (array, key) =>
  [...array].sort((a, b) => {
    const av = typeof key === 'function' ? key(a) : a[key];
    const bv = typeof key === 'function' ? key(b) : b[key];
    return av < bv ? -1 : av > bv ? 1 : 0;
  });

export default sortBy;
