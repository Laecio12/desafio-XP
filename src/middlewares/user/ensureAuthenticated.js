import jwt from 'jsonwebtoken';
import AppError from '../../errors/AppError.js';
import userService from '../../services/user/index.js';

const ensureAuthenticated = async (request, response, next) => {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const secret = process.env.JWT_SECRET;
    const { user } = jwt.verify(token, secret);
    const userData = await userService.getUserById(user.id);
    request.user = userData;
    next();
  } catch (error) {
    throw new AppError(error.message, error.statusCode);
  }
};

export default ensureAuthenticated;
