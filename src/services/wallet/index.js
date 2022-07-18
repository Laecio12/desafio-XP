import WalletModel from '../../models/Wallet/index.js';

const getInvestmentsByUser = async (userId) => {
  const investments = await WalletModel.getInvestmentsByUser(userId);
  return investments;
};

const getInvestmentBySymbolByUser = async (userId, symbol) => {
  const [investment] = await WalletModel.getInvestmentBySymbolByUser(userId, symbol);
  return investment;
};

export default { getInvestmentsByUser, getInvestmentBySymbolByUser };
