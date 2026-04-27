const keyBy = (array, key) =>
  array.reduce((acc, item) => {
    acc[typeof key === 'function' ? key(item) : item[key]] = item;
    return acc;
  }, {});

export default keyBy;
