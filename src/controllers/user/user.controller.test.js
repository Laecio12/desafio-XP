import sinon from 'sinon';
import { expect } from 'chai';
import { v4 as uuid } from 'uuid';
import userService from '../../services/user/index.js';
import userController from './index.js';

const returnUser = {
  account: '587396-0',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI2ODU4MiwiZXhwIjoxNjU4NDQxMzgyfQ.w8LX2wQuEnqaEY6uS6UnOjmUcMeMQABkNkDmmrP42bM',
};

describe('Testing the user controller layer', () => {
  describe('when a user is created successfully', async () => {
    const response = {};
    const request = {
      body: {
        name: 'laecio',
        cpf: '00000000000',
        password: '123456',
      },
    };

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(userService, 'create').resolves(returnUser);
    });

    after(() => {
      userService.create.restore();
    });

    it('should return status 201', async () => {
      await userController.create(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('should return user!', async () => {
      await userController.create(request, response);
      expect(response.json.calledWith(returnUser)).to.be.true;
    });
  });

  describe('when a user is created successfully', async () => {
    const response = {};
    const request = {
      body: {
        name: 'laecio',
        cpf: '00000000000',
        password: '123456',
      },
    };

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(userService, 'create').resolves(returnUser);
    });

    after(() => {
      userService.create.restore();
    });

    it('should return status 201', async () => {
      await userController.create(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('should return user!', async () => {
      await userController.create(request, response);
      expect(response.json.calledWith(returnUser)).to.be.true;
    });
  });

  describe('when the user logs in', async () => {
    const response = {};
    const request = {
      body: {
        cpf: '00000000000',
        password: '123456',
      },
    };

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(userService, 'createSession').resolves(returnUser.token);
    });

    after(() => {
      userService.createSession.restore();
    });

    it('should return status 200', async () => {
      await userController.createSession(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('when a user is updated successfully', async () => {
    const response = {};
    const request = {
      body: {
        name: 'laecio pereira',
        password: '1234567',
      },
      user: {
        id: uuid(),
      }
    };

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(userService, 'edit').resolves(true);
    });

    after(() => {
      userService.edit.restore();
    });

    it('should return status 200', async () => {
      await userController.edit(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('should return a message "Dados atualizados com sucesso!"', async () => {
      await userController.edit(request, response);
      console.log(response.json);
      expect(response.json.calledWith({message: 'Dados atualizados com sucesso!'})).to.be.true;
    });
  });
});
