import jwt from 'jsonwebtoken';
import 'dotenv/config';

const generateJWT = async (user) => {
  const jwtConfig = { expiresIn: '48h', algorithm: 'HS256' };

  const secret = process.env.JWT_SECRET;

  return jwt.sign({ user }, secret, jwtConfig);
};

export default generateJWT;
