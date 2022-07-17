import AppError from '../../errors/AppError.js';
import AccountModel from '../../models/Account/index.js';

const deposit = async (accountNumber, value) => {
  await AccountModel.deposit(accountNumber, value);
};

const getBalance = async (accountNumber) => {
  const [{ balance }] = await AccountModel.getBalance(accountNumber);
  return balance;
};

const withdraw = async (accountNumber, value) => {
  const [{ balance }] = await AccountModel.getBalance(accountNumber);
  if (balance < value) throw new AppError('Saldo insuficiente');
  await AccountModel.withdraw(accountNumber, value);
};

export default { deposit, withdraw, getBalance };
