import AppError from '../../errors/AppError.js';
import connection from '../connection.js';

const create = async (id, name, cpf, password, accountNumber) => {
  const transaction = await connection.getConnection();

  try {
    await transaction.beginTransaction();
    await transaction.query('INSERT INTO users (id, name, cpf, password) VALUES (?, ?, ?, ?)', [id, name, cpf, password]);
    await transaction.query('INSERT INTO accounts (account_number, balance, user_id) VALUES (?, ?, ?)', [accountNumber, 0, id]);

    await transaction.commit();
    return { id, account: accountNumber };
  } catch (error) {
    await transaction.rollback();
    throw new AppError(error.message, 500);
  } finally {
    if (transaction) transaction.release();
  }
};

const findByCpf = async (cpf) => {
  try {
    const [user] = await connection.execute('SELECT * FROM users WHERE cpf = ?', [cpf]);
    return user;
  } catch (error) {
    throw new AppError(error.message, 500);
  }
};

const findById = async (id) => {
  try {
    const [user] = await connection.execute('SELECT U.*, A.account_number as account FROM users as U JOIN accounts as A ON A.user_id=U.id WHERE id = ?', [id]);
    return user;
  } catch (error) {
    throw new AppError(error.message, 500);
  }
};

export default { create, findByCpf, findById };
