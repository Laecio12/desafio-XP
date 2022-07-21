import AppError from '../../errors/AppError.js';
import connection from '../connection.js';

const deposit = async (accountNumber, value) => {
  try {
    await connection.execute('UPDATE accounts SET balance = balance + ? WHERE account_number = ?', [value, accountNumber]);
  } catch (error) {
    throw new AppError(error.message, 500);
  }
};

const withdraw = async (accountNumber, value) => {
  try {
    await connection.execute('UPDATE accounts SET balance = balance - ? WHERE account_number = ?', [value, accountNumber]);
  } catch (error) {
    throw new AppError(error.message, 500);
  }
};

const getBalance = async (accountNumber) => {
  try {
    const [balance] = await connection.execute('SELECT balance as Saldo, user_id as CodCliente FROM accounts WHERE account_number = ?', [accountNumber]);
    return balance;
  } catch (error) {
    throw new AppError(error.message, 500);
  }
};

export default { deposit, getBalance, withdraw };
