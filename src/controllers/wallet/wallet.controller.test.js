import sinon from 'sinon';
import { expect } from 'chai';
import { v4 as uuid } from 'uuid';
import walletService from '../../services/wallet/index.js';
import walletController from './index.js';


describe('Testing the wallet controller layer', () => {

describe('when a user getInvestmentsByUser', async () => {
  const response = {};
  const request = {
    user: {
      id: uuid(),
    }};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(walletService, 'getInvestmentsByUser').resolves(true);
  });

  after(() => {
    walletService.getInvestmentsByUser.restore();
  });

  it('should return status 200', async () => {
    await walletController.getInvestmentsByUser(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
  });

});

describe('when a user getInvestmentBySymbolByUser', async () => {
  const response = {};
  const request = {
    user: {
      id: uuid(),
    },
    params : {
      CodAtivo: 'XPBR31',
  }
  };

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(walletService, 'getInvestmentBySymbolByUser').resolves(true);
  });

  after(() => {
    walletService.getInvestmentBySymbolByUser.restore();
  });

  it('should return status 200', async () => {
    await walletController.getInvestmentBySymbolByUser(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
  });

});


})