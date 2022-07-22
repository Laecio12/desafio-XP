import AppError from '../../errors/AppError.js';

const ensureAdmin = async (request, _response, next) => {
  const { admin } = request.user;

  if (!admin) {
    throw new AppError('Usuário não é uma pessoa admin', 401);
  }
  next();
};

export default ensureAdmin;
