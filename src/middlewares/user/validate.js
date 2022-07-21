import AppError from '../../errors/AppError.js';

const validate = (request, _response, next) => {
  const { Nome: name, CPF: cpf, Senha: password } = request.body;

  if (!name) throw new AppError('Nome é obrigatório!');
  else if (!cpf) throw new AppError('CPF é obrigatório!');
  else if (!password) throw new AppError('Senha é obrigatória!');

  next();
};

export default validate;
