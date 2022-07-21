import sinon from 'sinon';
import { expect } from 'chai';
import connection from '../../models/connection.js';
import { v4 as uuid } from 'uuid';
import investmentService from './index.js';
import InvestmentModel from '../../models/Investment/index.js';
import generateNumberAccount from '../../utils/generateNumberAccount.js';
import accountService from '../../services/account/index.js';
import AppError from '../../errors/AppError.js';
import formattedToBRL from '../../utils/formattedToBRL.js';

const data = {
  accountNumber: generateNumberAccount(),
  userId: uuid(),
  symbol: 'XPBR31',
  quantity: 100,
};

const investment = [
  {
    symbol: 'XPBR31',
    price: 94.31,
    quantity: 200,
    created_at: '2022-07-18T16:28:52.000Z',
    updated_at: '2022-07-18T16:28:52.000Z',
  },
];

const allInvestments = [
  {
    "symbol": "ALZR11",
    "price": "113.50",
    "quantity": 150,
    "created_at": "2022-07-18T16:28:52.000Z",
    "updated_at": "2022-07-18T16:28:52.000Z"
  },
  {
    "symbol": "FLRY3",
    "price": "16.35",
    "quantity": 250,
    "created_at": "2022-07-18T16:28:52.000Z",
    "updated_at": "2022-07-18T16:28:52.000Z"
  },
  {
    "symbol": "HGLG11",
    "price": "163.54",
    "quantity": 150,
    "created_at": "2022-07-18T16:28:52.000Z",
    "updated_at": "2022-07-18T16:28:52.000Z"
  },
  {
    "symbol": "KNRI11",
    "price": "132.40",
    "quantity": 150,
    "created_at": "2022-07-18T16:28:52.000Z",
    "updated_at": "2022-07-18T16:28:52.000Z"
  },
  {
    "symbol": "MGLU3",
    "price": "2.78",
    "quantity": 250,
    "created_at": "2022-07-18T16:28:52.000Z",
    "updated_at": "2022-07-18T16:28:52.000Z"
  },
  {
    "symbol": "MXRF11",
    "price": "9.68",
    "quantity": 150,
    "created_at": "2022-07-18T16:28:52.000Z",
    "updated_at": "2022-07-18T16:28:52.000Z"
  },
  {
    "symbol": "PETR4",
    "price": "27.96",
    "quantity": 100,
    "created_at": "2022-07-18T16:28:52.000Z",
    "updated_at": "2022-07-18T16:28:52.000Z"
  },
  {
    "symbol": "TAEE11",
    "price": "39.60",
    "quantity": 150,
    "created_at": "2022-07-18T16:28:52.000Z",
    "updated_at": "2022-07-18T16:28:52.000Z"
  },
  {
    "symbol": "XPBR31",
    "price": "94.31",
    "quantity": 200,
    "created_at": "2022-07-18T16:28:52.000Z",
    "updated_at": "2022-07-18T16:28:52.000Z"
  },
  {
    "symbol": "XPLG11",
    "price": "96.00",
    "quantity": 250,
    "created_at": "2022-07-18T16:28:52.000Z",
    "updated_at": "2022-07-18T16:28:52.000Z"
  }
]

describe('Testing the investment service layer', () => {
  describe('when the user a purchase investment not found', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(connection, 'query').resolves(true);
      sinon.stub(InvestmentModel, 'getBySymbol').resolves([]);
      sinon.stub(accountService, 'getBalance').resolves(true);
      sinon.stub(InvestmentModel, 'getInvestmentBySymbolByUser').resolves(true);
      sinon.stub(InvestmentModel, 'purchase').resolves(true);
    });

    afterEach(async () => {
      connection.execute.restore();
      connection.query.restore();
      InvestmentModel.getBySymbol.restore();
      accountService.getBalance.restore();
      InvestmentModel.getInvestmentBySymbolByUser.restore();
      InvestmentModel.purchase.restore();
    });

    it('Should not be able purchase investment not found', async () => {
      try {
        await investmentService.purchase(
          data.accountNumber,
          data.userId,
          'ABCD3',
          data.quantity
        );
      } catch (error) {
        expect(error).to.be.an.instanceof(AppError);
        expect(error.message).to.be.equal('O ativo ABCD3  não está disponível na corretora!');
        expect(error.statusCode).to.be.equal(404);
      }
    });
  });

  describe('when the user a purchase quantity unavailable', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(connection, 'query').resolves(true);
      sinon.stub(InvestmentModel, 'getBySymbol').resolves(investment);
      sinon.stub(accountService, 'getBalance').resolves(true);
      sinon.stub(InvestmentModel, 'getInvestmentBySymbolByUser').resolves(true);
      sinon.stub(InvestmentModel, 'purchase').resolves(true);
    });

    afterEach(async () => {
      connection.execute.restore();
      connection.query.restore();
      InvestmentModel.getBySymbol.restore();
      accountService.getBalance.restore();
      InvestmentModel.getInvestmentBySymbolByUser.restore();
      InvestmentModel.purchase.restore();
    });

    it('Should not be able purchase investment quantity unavailable', async () => {
      try {
        await investmentService.purchase(
          data.accountNumber,
          data.userId,
          data.symbol,
          1000
        );
      } catch (error) {
        expect(error).to.be.an.instanceof(AppError);
        expect(error.message).to.be.equal(
          'A quantidade disponível para XPBR31 é 200!'
        );
        expect(error.statusCode).to.be.equal(400);
      }
    });
  });

  describe('when the user a purchase unavailable balance', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(connection, 'query').resolves(true);
      sinon.stub(InvestmentModel, 'getBySymbol').resolves(investment);
      sinon.stub(accountService, 'getBalance').resolves(1000);
      sinon.stub(InvestmentModel, 'getInvestmentBySymbolByUser').resolves(true);
      sinon.stub(InvestmentModel, 'purchase').resolves(true);
    });

    afterEach(async () => {
      connection.execute.restore();
      connection.query.restore();
      InvestmentModel.getBySymbol.restore();
      accountService.getBalance.restore();
      InvestmentModel.getInvestmentBySymbolByUser.restore();
      InvestmentModel.purchase.restore();
    });

    it('Should not be able purchase investment with unavailable balance', async () => {
      try {
        await investmentService.purchase(
          data.accountNumber,
          data.userId,
          data.symbol,
          100
        );
      } catch (error) {
        expect(error).to.be.an.instanceof(AppError);
        expect(error.message).to.be.equal(
          `Valor da compra ${formattedToBRL(investment[0].price * 100)} seu saldo é ${formattedToBRL(1000)}!`
        );
        expect(error.statusCode).to.be.equal(400);
      }
    });
  });

  describe('when the user a purchase new investment successfully', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(connection, 'query').resolves(true);
      sinon.stub(InvestmentModel, 'getBySymbol').resolves(investment);
      sinon.stub(accountService, 'getBalance').resolves(10000);
      sinon.stub(InvestmentModel, 'getInvestmentBySymbolByUser').resolves([]);
      sinon.stub(InvestmentModel, 'purchase').resolves(true);
    });

    afterEach(async () => {
      connection.execute.restore();
      connection.query.restore();
      InvestmentModel.getBySymbol.restore();
      accountService.getBalance.restore();
      InvestmentModel.getInvestmentBySymbolByUser.restore();
      InvestmentModel.purchase.restore();
    });

    it('Should be able purchase investment', async () => {
      await investmentService.purchase(
        data.accountNumber,
        data.userId,
        data.symbol,
        100
      );

      expect(InvestmentModel.purchase.calledOnce).to.be.true;
    });
  });

  describe('when the user buys an investment that is already in your portfolio with success', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(connection, 'query').resolves(true);
      sinon.stub(InvestmentModel, 'getBySymbol').resolves(investment);
      sinon.stub(accountService, 'getBalance').resolves(10000);
      sinon
        .stub(InvestmentModel, 'getInvestmentBySymbolByUser')
        .resolves(investment);
      sinon.stub(InvestmentModel, 'InvestmentAdd').resolves(true);
    });

    afterEach(async () => {
      connection.execute.restore();
      connection.query.restore();
      InvestmentModel.getBySymbol.restore();
      accountService.getBalance.restore();
      InvestmentModel.getInvestmentBySymbolByUser.restore();
      InvestmentModel.InvestmentAdd.restore();
    });

    it('Should be able purchase investment', async () => {
      await investmentService.purchase(
        data.accountNumber,
        data.userId,
        data.symbol,
        100
      );

      expect(InvestmentModel.InvestmentAdd.calledOnce).to.be.true;
    });
  });

  describe('when the user sell unavailable investment', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(connection, 'query').resolves(true);
      sinon.stub(InvestmentModel, 'getInvestmentBySymbolByUser').resolves([]);
      sinon.stub(InvestmentModel, 'sell').resolves(true);
    });

    afterEach(async () => {
      connection.execute.restore();
      connection.query.restore();
      InvestmentModel.getInvestmentBySymbolByUser.restore();
      InvestmentModel.sell.restore();
    });

    it('Should not be able sell investment', async () => {
      try {
        await investmentService.sell(
          data.accountNumber,
          data.userId,
          'ABCD3',
          100
        );
      } catch (error) {
        expect(error.message).to.be.equal(
          'O ativo ABCD3 não está na sua carteira!'
        );
        expect(error.statusCode).to.be.equal(404);
      }
    });
  });

  describe('when the user sell unavailable quantity investment', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(connection, 'query').resolves(true);
      sinon
        .stub(InvestmentModel, 'getInvestmentBySymbolByUser')
        .resolves(investment);
      sinon.stub(InvestmentModel, 'sell').resolves(true);
    });

    afterEach(async () => {
      connection.execute.restore();
      connection.query.restore();
      InvestmentModel.getInvestmentBySymbolByUser.restore();
      InvestmentModel.sell.restore();
    });

    it('Should not be able to sell the investment with unavailable quantity', async () => {
      try {
        await investmentService.sell(
          data.accountNumber,
          data.userId,
          data.symbol,
          1000
        );
      } catch (error) {
        expect(error.message).to.be.equal(
          'A quantidade de XPBR31 em carteira: 200!'
        );
        expect(error.statusCode).to.be.equal(400);
      }
    });
  });

  describe('when the user sell investment successfully', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(connection, 'query').resolves(true);
      sinon
        .stub(InvestmentModel, 'getInvestmentBySymbolByUser')
        .resolves(investment);
      sinon.stub(InvestmentModel, 'sell').resolves(true);
      sinon.stub(InvestmentModel, 'deleteTransaction').resolves(true);
    });

    afterEach(async () => {
      connection.execute.restore();
      connection.query.restore();
      InvestmentModel.getInvestmentBySymbolByUser.restore();
      InvestmentModel.sell.restore();
    });

    it('Should be able sell investment', async () => {
      await investmentService.sell(
        data.accountNumber,
        data.userId,
        data.symbol,
        200
      );

      expect(InvestmentModel.sell.calledOnce).to.be.true;
      expect(InvestmentModel.deleteTransaction.calledOnce).to.be.true;
    });
  });

  describe('when list all investment successfully', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(InvestmentModel, 'getAll').resolves(allInvestments);
    });

    afterEach(async () => {
      connection.execute.restore();
      InvestmentModel.getAll.restore();
    });

    it('Should be able list all investments', async () => {
      const result = await investmentService.getAll();

      expect(result).to.be.an('array');
    });
  });
});
