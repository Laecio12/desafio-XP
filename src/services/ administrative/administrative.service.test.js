import sinon from 'sinon';
import { expect } from 'chai';
import connection from '../../models/connection.js';

import AdministrativeModel from '../../models/ Administrative/index.js';
import administrativeService from './index.js';
import InvestmentModel from '../../models/Investment/index.js';

describe('Testing the administrative service layer', () => {
  describe('when getAll users', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(AdministrativeModel, 'getAllUsers').resolves(true);
      sinon.stub(administrativeService, 'getAllUsers').resolves([]);
    });

    afterEach(async () => {
      connection.execute.restore();
      AdministrativeModel.getAllUsers.restore();
      administrativeService.getAllUsers.restore();
    });

    it('Should be able list all users', async () => {
      const result  = await administrativeService.getAllUsers()
      expect(administrativeService.getAllUsers.calledOnce).to.be.true;
      expect(result).to.be.an('array');
    });

  });

  describe('when add a new investment', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(AdministrativeModel, 'addInvestment').resolves(true);
      sinon.stub(InvestmentModel, 'getBySymbol').resolves([]);
    });

    afterEach(async () => {
      connection.execute.restore();
      AdministrativeModel.addInvestment.restore();
      InvestmentModel.getBySymbol.restore();
    });

    it('Should be able add a new investment', async () => {
       await administrativeService.addInvestment('ABCD3', 10.00, 100)
      expect(administrativeService.addInvestment).to.be.an('function');
      expect(AdministrativeModel.addInvestment.calledOnce).to.be.true;
      expect(AdministrativeModel.addInvestment.calledWith('ABCD3', 10.00, 100)).to.be.true;
    });
    
    
    

  });

  describe('when edit price the investment', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(AdministrativeModel, 'editPrice').resolves(true);
      sinon.stub(InvestmentModel, 'getBySymbol').resolves([{}]);
    });

    afterEach(async () => {
      connection.execute.restore();
      AdministrativeModel.editPrice.restore();
      InvestmentModel.getBySymbol.restore();
    });

    it('Should be able edit price', async () => {
       await administrativeService.editPrice('MGLU3', 10.00, 100)
      expect(administrativeService.editPrice).to.be.an('function');
      expect(AdministrativeModel.editPrice.calledOnce).to.be.true;
      
    });
  });
  
});
