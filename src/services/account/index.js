import AppError from '../../errors/AppError.js';
import AccountModel from '../../models/Account/index.js';
import formattedToBRL from '../../utils/formattedToBRL.js';

const deposit = async (accountNumber, value) => {
  await AccountModel.deposit(accountNumber, value);
};

const getBalance = async (accountNumber) => {
  const [{ Saldo, CodCliente }] = await AccountModel.getBalance(accountNumber);
  return {
    CodCliente,
    Saldo: formattedToBRL(Saldo),
  };
};

const withdraw = async (accountNumber, value) => {
  const [{ Saldo }] = await AccountModel.getBalance(accountNumber);

  if (Saldo < value) throw new AppError(`Saldo insuficiente para saque de ${formattedToBRL(value)} seu saldo é ${formattedToBRL(Saldo)}!`);
  await AccountModel.withdraw(accountNumber, value);
};

export default { deposit, withdraw, getBalance };
