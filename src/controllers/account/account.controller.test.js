import sinon from 'sinon';
import { expect } from 'chai';

import accountService from '../../services/account/index.js';
import accountController from './index.js';
import formattedToBRL from '../../utils/formattedToBRL.js';


describe('Testing the account controller layer', () => {

describe('when a user make deposit', async () => {
  const response = {};
  const request = {
    user: {
      account: '587396-0',
    },
    body : {
    value: 1000,
  }};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(accountService, 'deposit').resolves(true);
  });

  after(() => {
    accountService.deposit.restore();
  });

  it('should return status 200', async () => {
    await accountController.deposit(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
  });

   it('should be able a message "Deposito realizado com sucesso"', async () => {
     await accountService.deposit(request, response);
      expect(response.json.calledWith({ message: 'Deposito realizado com sucesso!' })).to.be.true;
   });
});
describe('when a user make withdraw', async () => {
  const response = {};
  const request = {
    user: {
      account: '587396-0',
    },
    body : {
    value: 1000,
  }};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(accountService, 'withdraw').resolves(true);
  });

  after(() => {
    accountService.withdraw.restore();
  });

  it('should return status 200', async () => {
    await accountController.withdraw(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
  });

   it('should be able a message "Deposito realizado com sucesso"', async () => {
     await accountService.withdraw(request, response);
      expect(response.json.calledWith({ message: 'Saque realizado com sucesso!' })).to.be.true;
   });
});

describe('when a user check the balance', async () => {
  const response = {};
  const request = {
    user: {
      account: '587396-0',
    },
    body : {
    value: 1000,
  }};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(accountService, 'getBalance').resolves(1000);
  });

  after(() => {
    accountService.getBalance.restore();
  });

  it('should return status 200', async () => {
    await accountController.getBalance(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
  });

   it('should be able a return a balance', async () => {
     await accountService.getBalance(request, response);
      expect(response.json.calledOnce).to.be.true;
   });
});
})