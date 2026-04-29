const trackPageView = (path) => {
  const view = {
    path,
    timestamp: new Date().toISOString(),
    referrer: typeof document !== 'undefined' ? document.referrer || null : null,
  };
  if (typeof window !== 'undefined' && typeof window.__analytics?.page === 'function') {
    window.__analytics.page(view);
  } else {
    console.log('[trackPageView]', view);
  }
  return view;
};

export default trackPageView;
