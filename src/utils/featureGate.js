const featureGate = (flag) => {
  if (typeof window !== 'undefined' && window.__featureFlags) {
    return Boolean(window.__featureFlags[flag]);
  }
  return false;
};

export default featureGate;
