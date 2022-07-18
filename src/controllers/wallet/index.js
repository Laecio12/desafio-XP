import walletService from '../../services/wallet/index.js';

const getInvestmentsByUser = async (request, response) => {
  const { id } = request.user;
  const investments = await walletService.getInvestmentsByUser(id);
  return response.status(200).json(investments);
};

export default { getInvestmentsByUser };
