import AppError from '../../errors/AppError.js';
import connection from '../connection.js';

const getInvestmentsByUser = async (userId) => {
  try {
    const [investments] = await connection.execute(
      `SELECT T.user_id as CodCliente,
      T.investment_symbol as CodAtivo,
      T.quantity as QtdeAtivo,
      T.average_price as PrecoMedio
     FROM transactions AS T WHERE user_id = ?`,
      [userId],
    );
    return investments;
  } catch (error) {
    throw new AppError(error.message, 500);
  }
};

const getInvestmentBySymbolByUser = async (userId, symbol) => {
  try {
    const [investment] = await connection.execute(`SELECT T.user_id as CodCliente,
    T.investment_symbol as CodAtivo,
    T.quantity as QtdeAtivo,
    T.average_price as PrecoMedio
   FROM transactions AS T WHERE user_id = ? AND investment_symbol = ?`, [userId, symbol]);

    return investment;
  } catch (error) {
    throw new AppError(error.message, 500);
  }
};

export default { getInvestmentsByUser, getInvestmentBySymbolByUser };
