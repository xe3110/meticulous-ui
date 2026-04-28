const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage quota exceeded or private browsing restriction
  }
};

export default setLocalStorage;
