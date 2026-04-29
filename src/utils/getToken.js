const getToken = (key = 'auth_token') => localStorage.getItem(key);

export default getToken;
