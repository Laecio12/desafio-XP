import walletService from '../../services/wallet/index.js';

const getInvestmentsByUser = async (request, response) => {
  const { id } = request.user;
  const investments = await walletService.getInvestmentsByUser(id);
  return response.status(200).json(investments);
};

const getInvestmentBySymbolByUser = async (request, response) => {
  const { id } = request.user;
  const { CodAtivo } = request.params;

  const investment = await walletService.getInvestmentBySymbolByUser(id, CodAtivo);
  return response.status(200).json(investment);
};

export default { getInvestmentsByUser, getInvestmentBySymbolByUser };
