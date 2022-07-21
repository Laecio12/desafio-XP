import AppError from '../../errors/AppError.js';

const validateValue = (req, res, next) => {
  const { Valor: value } = req.body;
  if (value <= 0) throw new AppError('Valor informado deve ser maior que 0.00!', 422);
  if (!value) throw new AppError('Valor é obrigatório!');
  if (typeof value === 'string') throw new AppError('Valor informado deve ser um número!', 422);
  next();
};

export default validateValue;
