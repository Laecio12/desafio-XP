import sinon from 'sinon';
import { expect } from 'chai';

import userService from '../../services/user/index.js';
import userController from './index.js';

const returnUser = {
  account: '587396-0',
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI2ODU4MiwiZXhwIjoxNjU4NDQxMzgyfQ.w8LX2wQuEnqaEY6uS6UnOjmUcMeMQABkNkDmmrP42bM"
};

describe('Testing the user controller layer', () => {

describe('when a user is created successfully', async () => {
  const response = {};
  const request = {
    body : {
    name: 'laecio',
    cpf: '00000000000',
    password: '123456',
  }};

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
})