import sinon from 'sinon';
import { expect } from 'chai';
import connection from '../connection.js';
import AdministrativeModel from './index.js';


describe('Testing the administrative model layer', () => {
  describe('when getAll users', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(AdministrativeModel, 'getAllUsers').resolves([]);
    });

    afterEach(async () => {
      connection.execute.restore();
      AdministrativeModel.getAllUsers.restore();
    });

    it('Should be able list all users', async () => {
      const result  = await AdministrativeModel.getAllUsers()
      expect(AdministrativeModel.getAllUsers.calledOnce).to.be.true;
      expect(result).to.be.an('array');
    });

  });

  describe('when add a new investment', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(AdministrativeModel, 'addInvestment').resolves(true);
    });

    afterEach(async () => {
      connection.execute.restore();
      AdministrativeModel.addInvestment.restore();
    });

    it('Should be able add a new investment', async () => {
       await AdministrativeModel.addInvestment('ABCD3', 10.00, 100)
      expect(AdministrativeModel.addInvestment.calledOnce).to.be.true;
      expect(AdministrativeModel.addInvestment.calledWith('ABCD3', 10.00, 100)).to.be.true;
    });
    
    

  });

  describe('when edit price the investment', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(AdministrativeModel, 'editPrice').resolves(true);
    });

    afterEach(async () => {
      connection.execute.restore();
      AdministrativeModel.editPrice.restore();
    });

    it('Should be able edit price', async () => {
       await AdministrativeModel.editPrice('ABCD3', 10.00, 100)
      expect(AdministrativeModel.editPrice.calledOnce).to.be.true;
      expect(AdministrativeModel.editPrice.calledWith('ABCD3', 10.00, 100)).to.be.true;
    });
  });
  
});
