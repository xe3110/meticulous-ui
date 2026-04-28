const setSessionStorage = (key, value) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage quota exceeded or private browsing restriction
  }
};

export default setSessionStorage;
