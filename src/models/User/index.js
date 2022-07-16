import AppError from '../../errors/AppError.js';
import connection from '../connection.js';

const create = async (id, name, cpf, password) => {
  try {
    await connection.execute('INSERT INTO users (id, name, cpf, password) VALUES (?, ?, ?, ?)', [id, name, cpf, password]);
    return { id };
  } catch (error) {
    throw new AppError(error.message, 500);
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

export default { create, findByCpf };
