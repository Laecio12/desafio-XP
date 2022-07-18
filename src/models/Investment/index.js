import AppError from '../../errors/AppError.js';
import connection from '../connection.js';

const purchase = async (id, accountNumber, userId, symbol, quantity, total, averagePrice) => {
  const transaction = await connection.getConnection();
  try {
    transaction.beginTransaction();
    await transaction.query('UPDATE accounts SET balance = balance - ? WHERE account_number = ?', [total, accountNumber]);
    await transaction.query('UPDATE investments SET quantity = quantity - ? WHERE symbol = ?', [quantity, symbol]);
    await transaction.query('INSERT INTO transactions (id, user_id, investment_symbol, quantity, average_price) VALUES (?, ?, ?, ?, ?)', [id, userId, symbol, quantity, averagePrice]);
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw new AppError(error.message, 500);
  } finally {
    if (transaction) transaction.release();
  }
};

const InvestmentAdd = async (id, accountNumber, quantity, total, averagePrice, symbol) => {
  const transaction = await connection.getConnection();
  try {
    transaction.beginTransaction();
    await transaction.query('UPDATE accounts SET balance = balance - ? WHERE account_number = ?', [total, accountNumber]);
    await transaction.query('UPDATE investments SET quantity = quantity - ? WHERE symbol = ?', [quantity, symbol]);
    await transaction.query('UPDATE transactions SET quantity = quantity + ?, average_price = ? WHERE id = ?', [quantity, averagePrice, id]);
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw new AppError(error.message, 500);
  } finally {
    if (transaction) transaction.release();
  }
};

const sell = async (id, accountNumber, quantity, total, averagePrice, symbol) => {
  const transaction = await connection.getConnection();
  try {
    transaction.beginTransaction();
    await transaction.query('UPDATE accounts SET balance = balance + ? WHERE account_number = ?', [total, accountNumber]);
    await transaction.query('UPDATE investments SET quantity = quantity + ? WHERE symbol = ?', [quantity, symbol]);
    await transaction.query('UPDATE transactions SET quantity = quantity - ?, average_price = ? WHERE id = ?', [quantity, averagePrice, id]);
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw new AppError(error.message, 500);
  } finally {
    if (transaction) transaction.release();
  }
};

const deleteTransaction = async (id) => {
  try {
    await connection.execute('DELETE FROM transactions WHERE id = ?', [id]);
  } catch (error) {
    throw new AppError(error.message, 500);
  }
};

const getBySymbol = async (symbol) => {
  try {
    const [investment] = await connection.execute('SELECT * FROM investments WHERE symbol = ?', [symbol]);
    return investment;
  } catch (error) {
    throw new AppError(error.message, 500);
  }
};

const getInvestmentBySymbolByUser = async (userId, symbol) => {
  try {
    const [investment] = await connection.execute('SELECT * FROM transactions WHERE user_id = ? AND investment_symbol = ?', [userId, symbol]);
    return investment;
  } catch (error) {
    throw new AppError(error.message, 500);
  }
};
export default {
  purchase, getBySymbol, InvestmentAdd, getInvestmentBySymbolByUser, sell, deleteTransaction,
};
