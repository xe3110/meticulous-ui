import getToken from './getToken';

const isAuthenticated = (key = 'auth_token') => {
  const token = getToken(key);
  if (!token) return false;
  try {
    const [, payload] = token.split('.');
    const { exp } = JSON.parse(atob(payload));
    if (exp && Date.now() / 1000 > exp) {
      return false;
    }
    return true;
  } catch {
    return !!token;
  }
};

export default isAuthenticated;
