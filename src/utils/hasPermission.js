import decodeJWT from './decodeJWT';
import getToken from './getToken';

const hasPermission = (role, key = 'auth_token') => {
  const token = getToken(key);
  if (!token) return false;
  const payload = decodeJWT(token);
  if (!payload) return false;
  const roles = payload.roles ?? payload.role ?? [];
  return Array.isArray(roles) ? roles.includes(role) : roles === role;
};

export default hasPermission;
