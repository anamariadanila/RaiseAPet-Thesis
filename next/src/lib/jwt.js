import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";

const DEFAULT_SIGN_OPTIONS = {
  // expiresIn: 60 * 60 * 24 * 30, // 30 days
  expiresIn: 30,
};

export const signJwtAccessToken = (payload, options = DEFAULT_SIGN_OPTIONS) => {
  const secret_key = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secret_key, options);
  return token;
};

export const verifyJwtAccessToken = (token) => {
  try {
    const secret_key = process.env.SECRET_KEY;
    const payload = jwt.verify(token, secret_key);
    return payload;
  } catch (err) {
    throw new Error(err.message);
  }
};

function decodeJwt(token) {
  const decodedToken = jwt_decode(token);
  return decodedToken;
}

export function isJwtExpired(token) {
  const decodedToken = decodeJwt(token);
  const expTime = decodedToken.exp * 1000; // Convert expiration time to milliseconds
  const currentTime = Date.now();

  if (currentTime < expTime) {
    return false;
  } else {
    return true;
  }
}
