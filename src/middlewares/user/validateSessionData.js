import AppError from '../../errors/AppError.js';
import validateCPF from '../../utils/validateCPF.js';

const validateSessionData = (request, _response, next) => {
  const { CPF, Senha } = request.body;
  if (!CPF) throw new AppError('CPF é obrigatório!');
  validateCPF(CPF);
  if (!Senha) throw new AppError('Senha é obrigatória!');

  next();
};

export default validateSessionData;
