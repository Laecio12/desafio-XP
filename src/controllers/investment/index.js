import investmentService from '../../services/investment/index.js';

const purchase = async (request, response) => {
  const { account, id } = request.user;
  const { symbol, quantity } = request.body;
  await investmentService.purchase(account, id, symbol, quantity);

  response.status(200).json({ message: 'Compra realizada com sucesso' });
};

const sell = async (request, response) => {
  const { account, id } = request.user;
  const { symbol, quantity } = request.body;
  await investmentService.sell(account, id, symbol, quantity);

  response.status(200).json({ message: 'Venda realizada com sucesso' });
};

export default { purchase, sell };
