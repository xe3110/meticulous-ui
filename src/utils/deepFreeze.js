const deepFreeze = (obj) => {
  Object.getOwnPropertyNames(obj).forEach((name) => {
    const value = obj[name];
    if (value && typeof value === 'object') deepFreeze(value);
  });
  return Object.freeze(obj);
};

export default deepFreeze;
