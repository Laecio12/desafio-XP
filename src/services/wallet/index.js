import AppError from '../../errors/AppError.js';
import WalletModel from '../../models/Wallet/index.js';
import formattedToBRL from '../../utils/formattedToBRL.js';

const getInvestmentsByUser = async (userId) => {
  const investments = await WalletModel.getInvestmentsByUser(userId);

  const investmentsFormatted = investments.map((investment) => ({
    ...investment,
    PrecoMedio: formattedToBRL(investment.PrecoMedio),

  }));
  return investmentsFormatted;
};

const getInvestmentBySymbolByUser = async (userId, symbol) => {
  const [investment] = await WalletModel.getInvestmentBySymbolByUser(userId, symbol);
  if (!investment) throw new AppError('Investimento não encontrado!', 404);

  return {
    ...investment,
    PrecoMedio: formattedToBRL(investment.PrecoMedio),
  };
};

export default { getInvestmentsByUser, getInvestmentBySymbolByUser };
