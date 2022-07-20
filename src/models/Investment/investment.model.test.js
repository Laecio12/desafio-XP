import sinon from 'sinon';
import { expect } from 'chai';
import connection from '../connection.js';
import { v4 as uuid } from 'uuid';
import InvestmentModel from './index.js';

import generateNumberAccount from '../../utils/generateNumberAccount.js';

const investment = {
  id: uuid(),
  accountNumber: generateNumberAccount(),
  userId: uuid(),
  symbol: 'XPBR31',
  quantity: 100,
  total: 9431,
  averagePrice: 94.31,
};

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
];

describe('Testing the investment model layer', () => {
  describe('when a user purchase a investment', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'query').resolves(true);
      sinon.stub(InvestmentModel, 'purchase').resolves(true);
    });

    afterEach(async () => {
      connection.query.restore();
      InvestmentModel.purchase.restore();
    });

    it('Should be able purchase investment', async () => {
      await InvestmentModel.purchase(investment)
      expect(InvestmentModel.purchase.calledOnce).to.be.true;
    });

  });

  describe('when a user sell a investment', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'query').resolves(true);
      sinon.stub(InvestmentModel, 'sell').resolves(true);
    });

    afterEach(async () => {
      connection.query.restore();
      InvestmentModel.sell.restore();
    });

    it('Should be able sell investment', async () => {
      await InvestmentModel.sell(investment)
      expect(InvestmentModel.sell.calledOnce).to.be.true;
    });

  });

  describe('when list all investment', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'query').resolves(true);
      sinon.stub(InvestmentModel, 'getAll').resolves(allInvestments);
    });

    afterEach(async () => {
      connection.query.restore();
      InvestmentModel.getAll.restore();
    });

    it('Should be able list all investment', async () => {
      const result = await InvestmentModel.getAll()
      expect(result).to.be.an('array');
    });

  });

  
});
