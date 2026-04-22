const omitFunctions = (obj) =>
  Object.fromEntries(Object.entries(obj).filter(([, v]) => typeof v !== 'function'));

const deepEqual = (a, b) => {
  if (a === b) return true;
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every((k) => deepEqual(a[k], b[k]));
};

const hasEqualProps = (oldProps, newProps) =>
  deepEqual(omitFunctions(oldProps), omitFunctions(newProps));

export default hasEqualProps;
