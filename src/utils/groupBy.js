const groupBy = (array, key) =>
  array.reduce((acc, item) => {
    const group = typeof key === 'function' ? key(item) : item[key];
    (acc[group] ??= []).push(item);
    return acc;
  }, {});

export default groupBy;
