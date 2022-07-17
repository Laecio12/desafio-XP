import AppError from '../../errors/AppError.js';

const validateValue = (req, res, next) => {
  const { value } = req.body;
  if (!value) throw new AppError('Valor é obrigatório');
  if (typeof value === 'string') throw new AppError('Valor informado deve ser um número', 422);
  if (value < 0) throw new AppError('Valor informado deve ser maior que 0', 422);
  next();
};

export default validateValue;
