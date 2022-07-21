import sinon from 'sinon';
import { expect } from 'chai';
import { v4 as uuid } from 'uuid';
import investmentService from '../../services/investment/index.js';
import investmentController from './index.js';


describe('Testing the investment controller layer', () => {

describe('when user purchase a investment', async () => {
  const response = {};
  const request = {
    user: {
      account: '587396-0',
      id: uuid(),
    },
    body : {
     symbol: 'XPBR31', 
     quantity: 100,
  }};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(investmentService, 'purchase').resolves(true);
  });

  after(() => {
    investmentService.purchase.restore();
  });

  it('should return status 200', async () => {
    await investmentController.purchase(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
  });

   it('should be able a message "Compra realizada com sucesso"', async () => {
     await investmentService.purchase(request, response);
      expect(response.json.calledWith({ message: 'Compra realizada com sucesso!' })).to.be.true;
   });
});

describe('when user sell a investment', async () => {
  const response = {};
  const request = {
    user: {
      account: '587396-0',
      id: uuid(),
    },
    body : {
     symbol: 'XPBR31', 
     quantity: 100,
  }};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(investmentService, 'sell').resolves(true);
  });

  after(() => {
    investmentService.sell.restore();
  });

  it('should return status 200', async () => {
    await investmentController.sell(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
  });

   it('should be able a message "Venda realizada com sucesso"', async () => {
     await investmentService.sell(request, response);
      expect(response.json.calledWith({ message: 'Venda realizada com sucesso!' })).to.be.true;
   });
});

describe('when get all investments', async () => {
  const response = {};
  const request = {};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(investmentService, 'getAll').resolves([]);
  });

  after(() => {
    investmentService.getAll.restore();
  });

  it('should return status 200', async () => {
    await investmentController.getall(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
  });

   it('should be able return all investments', async () => {
     await investmentService.getAll(request, response);
      expect(response.json.calledWith([])).to.be.true;
   });
});


});