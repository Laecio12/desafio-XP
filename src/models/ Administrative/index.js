import connection from '../connection.js';

const getAllUsers = async () => {
  const [result] = await connection.query(
    'SELECT U.id, U.name, U.cpf, A.account_number as account, U.admin  FROM users AS U JOIN accounts AS A ON A.user_id=U.id',
  );
  return result;
};

export default { getAllUsers };
