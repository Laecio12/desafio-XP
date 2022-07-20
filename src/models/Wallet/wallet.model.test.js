import sinon from 'sinon';
import { expect } from 'chai';
import connection from '../connection.js';
import WalletModel from './index.js';
import { v4 as uuid } from 'uuid';
import generateNumberAccount from '../../utils/generateNumberAccount.js';

const investmentsByUser = [[
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
]];

const investment = [[
  {
    "symbol": "XPBR31",
    "price": "94.31",
    "quantity": 200,
    "created_at": "2022-07-18T16:28:52.000Z",
    "updated_at": "2022-07-18T16:28:52.000Z"
  },
]];

describe('Testing the wallet model layer', () => {
  describe('when a user get all investments', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'query').resolves(true);
      sinon.stub(WalletModel, 'getInvestmentsByUser').resolves(investmentsByUser);
    });

    afterEach(async () => {
      connection.query.restore();
      WalletModel.getInvestmentsByUser.restore();
    });

    it('Should be able get all investments by user', async () => {
      const result = await WalletModel.getInvestmentsByUser(uuid())
      expect(result).to.be.an('array');
    });

  });

  describe('when a user get a specific investment by user', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'query').resolves(true);
      sinon.stub(WalletModel, 'getInvestmentBySymbolByUser').resolves(investment);
    });

    afterEach(async () => {
      connection.query.restore();
      WalletModel.getInvestmentBySymbolByUser.restore();
    });

    it('Should be able get all investments', async () => {
      const result = await WalletModel.getInvestmentBySymbolByUser(uuid(), 'XPBR31')
      expect(result).to.be.an('array');
    });

  });

  
});
