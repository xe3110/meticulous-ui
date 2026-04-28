const getLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

export default getLocalStorage;
