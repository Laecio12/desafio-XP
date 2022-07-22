import AppError from '../../errors/AppError.js';

const validateInvestment = (request, response, next) => {
  const { CodAtivo, Valor, QtdeAtivo } = request.body;
  if (!CodAtivo) throw new AppError('O código do ativo é obrigatório!');
  if (typeof CodAtivo !== 'string') throw new AppError('O código do ativo deve ser uma string!', 422);

  if (!Valor) throw new AppError('O valor do ativo é obrigatório!');
  if (typeof Valor !== 'number') throw new AppError('O valor do ativo deve ser um número!', 422);
  if (Valor <= 0) throw new AppError('O valor deve ser maior que 0!', 422);

  if (!QtdeAtivo) throw new AppError('A quantidade do ativo é obrigatória!');
  if (typeof QtdeAtivo !== 'number') throw new AppError('A quantidade do ativo deve ser um número!', 422);
  if (QtdeAtivo <= 0) throw new AppError('A quantidade informada deve ser maior que 0!', 422);
  if (typeof QtdeAtivo === 'string') throw new AppError('A quantidade deve ser um número!', 422);
  next();
};

export default validateInvestment;
