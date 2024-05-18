import 'dotenv/config';

import jsonWebToken, { type JwtPayload } from 'jsonwebtoken';

import { JWTInfo } from '@/types/global.types';
import { env } from '@/utils/envConfig';

const generateAccessToken = (user: JWTInfo): string => {
  return jsonWebToken.sign(user, String(env.JWT_SECRET), {
    expiresIn: env.JWT_EXPIRES_IN != null ? String(env.JWT_EXPIRES_IN) : '1800s',
  });
};

const generateRefreshToken = (user: JWTInfo): string => {
  return jsonWebToken.sign(user, String(env.JWT_REFRESH_SECRET), {
    expiresIn: env.JWT_REFRESH_EXPIRES_IN != null ? String(env.JWT_REFRESH_EXPIRES_IN) : '1800s',
  });
};

const verifyRefreshToken = (token: string): string | null | JwtPayload => {
  try {
    return jsonWebToken.verify(token, String(env.JWT_REFRESH_SECRET));
  } catch (error) {
    return null;
  }
};

const parseJWT = (token: string): JWTInfo => {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
};

const verifyAcessToken = (token: string): string | null | JwtPayload => {
  try {
    return jsonWebToken.verify(token, String(env.JWT_SECRET));
  } catch (error) {
    return null;
  }
};

export { generateAccessToken, generateRefreshToken, parseJWT, verifyAcessToken, verifyRefreshToken };
