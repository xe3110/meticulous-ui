const removeToken = (key = 'auth_token') => localStorage.removeItem(key);

export default removeToken;
