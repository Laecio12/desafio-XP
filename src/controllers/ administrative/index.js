import administrativeService from '../../services/ administrative/index.js';

const getAllUsers = async (request, response) => {
  const users = await administrativeService.getAllUsers();
  return response.json(users);
};

const addInvestment = async (request, response) => {
  const { CodAtivo: symbol, Valor: price, QtdeAtivo: quantity } = request.body;
  await administrativeService.addInvestment(symbol, price, quantity);
  return response.json({ message: `O ativo ${symbol} foi adicionado com sucesso!` });
};

const editPrice = async (request, response) => {
  const { CodAtivo: symbol } = request.params;
  const { Valor: price } = request.body;
  await administrativeService.editPrice(symbol, price);
  return response.json({ message: `A cotação do ativo ${symbol} foi atualizada com sucesso!` });
};
export default { getAllUsers, addInvestment, editPrice };
