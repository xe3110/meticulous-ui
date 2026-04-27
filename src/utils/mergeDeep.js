const isPlainObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);

const mergeDeep = (target, source) => {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    result[key] =
      isPlainObject(target[key]) && isPlainObject(source[key])
        ? mergeDeep(target[key], source[key])
        : source[key];
  }
  return result;
};

export default mergeDeep;
