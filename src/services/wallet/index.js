import WalletModel from '../../models/Wallet/index.js';

const getInvestmentsByUser = async (userId) => {
  const investments = await WalletModel.getInvestmentsByUser(userId);
  return investments;
};

export default { getInvestmentsByUser };
