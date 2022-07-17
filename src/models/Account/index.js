import AppError from '../../errors/AppError.js';
import connection from '../connection.js';

const deposit = async (accountNumber, value) => {
  try {
    await connection.execute('UPDATE accounts SET balance = balance + ? WHERE account_number = ?', [value, accountNumber]);
  } catch (error) {
    throw new AppError(error.message, 500);
  }
};

export default { deposit };
