import AppError from '../../errors/AppError.js';

const validateEditar = (request, _response, next) => {
  const { Nome: name, Senha: password } = request.body;

  if (!name) throw new AppError('Nome é obrigatório!');

  else if (!password) throw new AppError('Senha é obrigatória!');

  next();
};

export default validateEditar;
