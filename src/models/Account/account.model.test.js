import sinon from 'sinon';
import { expect } from 'chai';
import connection from '../connection.js';
import AccountModel from './index.js';

import generateNumberAccount from '../../utils/generateNumberAccount.js';

const userBalance = [
  {
    balance: 1000,
  },
];

describe('Testing the account model layer', () => {
  describe('when a user make deposit', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'query').resolves(true);
      sinon.stub(AccountModel, 'deposit').resolves(true);
    });

    afterEach(async () => {
      connection.query.restore();
      AccountModel.deposit.restore();
    });

    it('Should be able a deposit', async () => {
      await AccountModel.deposit(generateNumberAccount(), 1000)
      expect(AccountModel.deposit.calledOnce).to.be.true;
    });

  });

  describe('when a user make withdraw', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'query').resolves(true);
      sinon.stub(AccountModel, 'withdraw').resolves(true);
    });

    afterEach(async () => {
      connection.query.restore();
      AccountModel.withdraw.restore();
    });

    it('Should be able a withdraw', async () => {
      await AccountModel.withdraw(generateNumberAccount(), 1000)
      expect(AccountModel.withdraw.calledOnce).to.be.true;
    });

  });

  describe('when a user check balance', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'query').resolves(true);
      sinon.stub(AccountModel, 'getBalance').resolves(userBalance);
    });

    afterEach(async () => {
      connection.query.restore();
      AccountModel.getBalance.restore();
    });

    it('Should be able a getBalance', async () => {
      await AccountModel.getBalance(generateNumberAccount())
      expect(AccountModel.getBalance.calledOnce).to.be.true;
    });

  });
});
