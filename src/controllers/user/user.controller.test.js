import sinon from 'sinon';
import { expect } from 'chai';

import userService from '../../services/user/index.js';
import userController from './index.js';

describe("quando é inserido com sucesso", async () => {
  const response = {};
  const request = {};

  before(() => {
    request.body = {
      "name": "Arco5",
      "quantity": 100
    };

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns("user criado com sucesso!");
    sinon.stub(userService, "create").resolves(true);
   });

   after(() => {
     userService.create.restore();
   });

   it("é chamado o status com o código 201", async () => {
     await userController.create(request, response);
     expect(response.status.calledWith(201)).to.be.equal(true);
  });
});