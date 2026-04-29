const setToken = (token, key = 'auth_token') => localStorage.setItem(key, token);

export default setToken;
