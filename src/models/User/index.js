import connection from '../connection.js';

const create = async (id, name, cpf, password) => {
  try {
    await connection.execute('INSERT INTO users (id, name, cpf, password) VALUES (?, ?, ?, ?)', [id, name, cpf, password]);
  } catch (error) {
    console.log(error);
  }
  return { id };
};

export default { create };
