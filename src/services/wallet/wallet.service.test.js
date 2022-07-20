import sinon from 'sinon';
import { expect } from 'chai';
import connection from '../../models/connection.js';
import { v4 as uuid } from 'uuid';
import walletService from './index.js';
import WalletModel from '../../models/Wallet/index.js';
import generateNumberAccount from '../../utils/generateNumberAccount.js';
import AppError from '../../errors/AppError.js';

const user = {
  id: uuid(),
  name: 'laecio',
  cpf: '00000000000',
  password: '123456',
  account: generateNumberAccount(),
};

const investmentsByUser = [
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

const investment = [
  {
    "symbol": "XPBR31",
    "price": "94.31",
    "quantity": 200,
    "created_at": "2022-07-18T16:28:52.000Z",
    "updated_at": "2022-07-18T16:28:52.000Z"
  },
]

describe('Testing the wallet service layer', () => {
  describe('when list all investments by user', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(WalletModel, 'getInvestmentsByUser').resolves(investmentsByUser);
    });

    afterEach(async () => {
      connection.execute.restore();
      WalletModel.getInvestmentsByUser.restore();
    });

    it('Should be able list investments by user', async () => {
      const result = await walletService.getInvestmentsByUser(user.id);
      expect(result).to.be.an('array');
    });

  });


  describe('when list specific investment by user', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(WalletModel, 'getInvestmentBySymbolByUser').resolves(investment);
    });

    afterEach(async () => {
      connection.execute.restore();
      WalletModel.getInvestmentBySymbolByUser.restore();
    });

    it('Should be able get specific investment', async () => {
      const result = await walletService.getInvestmentBySymbolByUser(user.id, 'XPBR31');
      expect(result).to.be.an('object');
    });

  });

  describe('when list  investment not exists', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(WalletModel, 'getInvestmentBySymbolByUser').resolves([]);
    });

    afterEach(async () => {
      connection.execute.restore();
      WalletModel.getInvestmentBySymbolByUser.restore();
    });

    it('Should return "Investimento não encontrado"', async () => {
      try {
       await walletService.getInvestmentBySymbolByUser(user.id, 'ABCD3');
      } catch (error) {
        expect(error).to.be.an.instanceOf(AppError);
        expect(error.message).to.be.equal('Investimento não encontrado');
      }
    });

  });
  

  
});
