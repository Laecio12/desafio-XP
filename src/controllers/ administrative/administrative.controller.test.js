import sinon from 'sinon';
import { expect } from 'chai';

import administrativeService from '../../services/ administrative/index.js';
import administrativeController from './index.js';

describe('Testing the administrative controller layer', () => {
  describe('when get all users', async () => {
    const response = {};
    const request = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(administrativeService, 'getAllUsers').resolves([]);
    });

    after(() => {
      administrativeService.getAllUsers.restore();
    });

    it('should return status 200', async () => {
      await administrativeController.getAllUsers(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    describe('when get add new investment', async () => {
      const response = {};
      const request = {
        body: {
          CodAtivo: 'ABCD3',
          Valor: 10,
          QtdeAtivo: 100,
        },
      };

      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(administrativeService, 'addInvestment').resolves(true);
      });

      after(() => {
        administrativeService.addInvestment.restore();
      });

      it('should return status 200', async () => {
        await administrativeController.addInvestment(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
    });

    describe('when update price', async () => {
      const response = {};
      const request = {
        params: {
          CodAtivo: 'ABCD3',
        },
        body: {
          Valor: 10,
        },
      };

      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(administrativeService, 'editPrice').resolves(true);
      });

      after(() => {
        administrativeService.editPrice.restore();
      });

      it('should return status 200', async () => {
        await administrativeController.editPrice(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
    });
  });
});
