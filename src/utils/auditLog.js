const auditLog = (action, metadata = {}) => {
  const entry = {
    action,
    metadata,
    timestamp: new Date().toISOString(),
    user: typeof window !== 'undefined' ? (window.__currentUser ?? null) : null,
  };
  if (typeof window !== 'undefined' && typeof window.__auditLogger === 'function') {
    window.__auditLogger(entry);
  } else {
    console.log('[auditLog]', entry);
  }
  return entry;
};

export default auditLog;
