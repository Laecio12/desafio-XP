import AppError from '../../errors/AppError.js';

const validateQuantity = (request, response, next) => {
  const { QtdeAtivo } = request.body;
  if (QtdeAtivo <= 0) throw new AppError('A quantidade informada deve ser maior que 0!', 422);
  if (!QtdeAtivo) throw new AppError('A quantidade é obrigatória!');
  if (typeof QtdeAtivo === 'string') throw new AppError('A quantidade deve ser um número!', 422);
  next();
};

export default validateQuantity;
