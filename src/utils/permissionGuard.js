const permissionGuard = (role, currentRoles = []) => {
  if (typeof window !== 'undefined' && Array.isArray(window.__userRoles)) {
    return window.__userRoles.includes(role);
  }
  return Array.isArray(currentRoles) && currentRoles.includes(role);
};

export default permissionGuard;
