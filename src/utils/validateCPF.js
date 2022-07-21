import AppError from '../errors/AppError.js';

const validateCPF = (cpf) => {
  if (cpf.includes('.')) throw new AppError('CPF deve conter apenas números!');
  if (cpf.length !== 11) throw new AppError('CPF deve ter 11 dígitos!');
};

export default validateCPF;
