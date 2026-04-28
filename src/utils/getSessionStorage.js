const getSessionStorage = (key) => {
  try {
    const item = sessionStorage.getItem(key);
    return item !== null ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

export default getSessionStorage;
