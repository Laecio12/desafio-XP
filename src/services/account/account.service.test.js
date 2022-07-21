import sinon from 'sinon';
import { expect } from 'chai';
import connection from '../../models/connection.js';
import { v4 as uuid } from 'uuid';
import accountService from './index.js';
import AccountModel from '../../models/Account/index.js';
import generateNumberAccount from '../../utils/generateNumberAccount.js';
import AppError from '../../errors/AppError.js';
import formattedToBRL from '../../utils/formattedToBRL.js';

const user = {
  id: uuid(),
  name: 'laecio',
  cpf: '00000000000',
  password: '123456',
  account: generateNumberAccount(),
};

const userBalance = [
  {
    CodCliente: user.id,
    Saldo: 1000,
  },
];

describe('Testing the account service layer', () => {
  describe('when the user a deposit', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(AccountModel, 'deposit').resolves(true);
    });

    afterEach(async () => {
      connection.execute.restore();
      AccountModel.deposit.restore();
    });

    it('Should be able a deposite', async () => {
      await accountService.deposit(user.account, 100);
      expect(AccountModel.deposit.calledOnce).to.be.true;

    });

  });
  describe('when the user check balance', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(AccountModel, 'getBalance').resolves(userBalance);
    });

    afterEach(async () => {
      connection.execute.restore();
      AccountModel.getBalance.restore();
    });

    it('Should return a balance', async () => {
      const result = await accountService.getBalance(user.account);
      console.log(result);
      expect(result.CodCliente).to.be.equal(user.id);
      expect(result.Saldo).to.be.equal(formattedToBRL(userBalance[0].Saldo),);
    });

  });

  describe('when the user make a withdraw', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(AccountModel, 'getBalance').resolves(userBalance);
      sinon.stub(AccountModel, 'withdraw').resolves(true);
    });

    afterEach(async () => {
      connection.execute.restore();
      AccountModel.getBalance.restore();
      AccountModel.withdraw.restore();
    });

    it('Should not be able make withdraw with insufficient funds', async () => {
      try{
        await accountService.withdraw(user.account, 10000);

      } catch (error) {
        console.log(error);
        expect(error).to.be.an.instanceOf(AppError);
        expect(error.message).to.be.equal(`Saldo insuficiente para saque de ${formattedToBRL(10000)} seu saldo é ${formattedToBRL(1000)}!`);
      }
    });

    it('Should be able make withdraw', async () => {
      await accountService.withdraw(user.account, 1000);
      expect(AccountModel.withdraw.calledOnce).to.be.true;
      expect(AccountModel.getBalance.calledOnce).to.be.true;
    });


  });

  
});
