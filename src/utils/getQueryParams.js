const getQueryParams = () => {
  const params = {};
  new URLSearchParams(window.location.search).forEach((value, key) => {
    params[key] = value;
  });
  return params;
};

export default getQueryParams;
