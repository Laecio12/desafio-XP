import { v4 as uuid } from 'uuid';
import AppError from '../../errors/AppError.js';
import investmentModel from '../../models/Investment/index.js';
import accountService from '../account/index.js';

const purchase = async (accountNumber, userId, symbol, quantity) => {
  const [investment] = await investmentModel.getBySymbol(symbol);
  if (!investment) throw new AppError(`O ativo ${symbol}  não está disponível`, 404);
  if (investment.quantity < quantity) throw new AppError(`A quantidade disponível para ${symbol} é ${investment.quantity}`, 400);

  const balance = await accountService.getBalance(accountNumber);
  const total = quantity * investment.price;

  if (balance < total) throw new AppError(`Valor da compra ${total} seu saldo é ${balance}`, 400);

  const [investmentByUser] = await investmentModel.getInvestmentBySymbolByUser(userId, symbol);
  if (investmentByUser) {
    const averagePrice = (
      investmentByUser.average_price * investmentByUser.quantity + total) / (
      investmentByUser.quantity + quantity);
    await investmentModel
      .InvestmentAdd(investmentByUser.id, accountNumber, quantity, total, averagePrice);
  } else {
    await investmentModel
      .purchase(uuid(), accountNumber, userId, symbol, quantity, total, investment.price);
  }
};

export default { purchase };
