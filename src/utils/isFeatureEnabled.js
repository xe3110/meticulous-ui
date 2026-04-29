const isFeatureEnabled = (flag, key = 'feature_flags') => {
  try {
    const flags = JSON.parse(localStorage.getItem(key) ?? '{}');
    return flags[flag] === true;
  } catch {
    return false;
  }
};

export default isFeatureEnabled;
