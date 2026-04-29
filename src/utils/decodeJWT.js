const decodeJWT = (token) => {
  try {
    const [, payload] = token.split('.');
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
};

export default decodeJWT;
