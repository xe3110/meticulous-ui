const removeQueryParam = (key) => {
  const url = new URL(window.location.href);
  url.searchParams.delete(key);
  window.history.pushState({}, '', url);
};

export default removeQueryParam;
