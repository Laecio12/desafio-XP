import AppError from '../../errors/AppError.js';
import AdministrativeModel from '../../models/ Administrative/index.js';
import InvestmentModel from '../../models/Investment/index.js';

const getAllUsers = async () => {
  const users = AdministrativeModel.getAllUsers();
  return users;
};

const addInvestment = async (symbol, price, quantity) => {
  const [investment] = await InvestmentModel.getBySymbol(symbol);
  if (investment) throw new AppError(`O ativo ${symbol}  já está cadastrado!`, 404);
  await AdministrativeModel.addInvestment(symbol, price, quantity);
};

export default { getAllUsers, addInvestment };
