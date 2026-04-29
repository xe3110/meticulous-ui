const getVariant = (testName, key = 'ab_variants') => {
  try {
    const variants = JSON.parse(localStorage.getItem(key) ?? '{}');
    return variants[testName] ?? null;
  } catch {
    return null;
  }
};

export default getVariant;
