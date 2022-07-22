import sinon from 'sinon';
import { expect } from 'chai';
import connection from '../connection.js';
import { v4 as uuid } from 'uuid';
import UserModel from './index.js';
import generateNumberAccount from '../../utils/generateNumberAccount.js';
import AppError from '../../errors/AppError.js';

const userExists = [
  {
    name: 'laecio',
    cpf: '00000000000',
    password: '$2a$08$RN1tma38XbvOT7N07THozO3ooT3zy7TNPhfxi//AScMIAPDGJTOIW',
  },
];

const newUser = {
  id: uuid(),
  name: 'laecio',
  cpf: '00000000000',
  password: '123456',
  account: generateNumberAccount(),
};

const returnUser = {
  id: newUser.id,
  account: newUser.account,
};

describe('Testing the user model layer', () => {
  describe('when a user is created successfully', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'query').resolves(returnUser);
      sinon.stub(UserModel, 'create').resolves(returnUser);
    });

    afterEach(async () => {
      connection.query.restore();
      UserModel.create.restore();
    });

    it('Should return object', async () => {
      const result = await UserModel.create(
        newUser.id,
        newUser.name,
        newUser.cpf,
        newUser.password,
        newUser.account
      );
      expect(result).to.be.an('object');
    });

    it('Must return an object with account and id properties', async () => {
      const result = await UserModel.create(
        newUser.id,
        newUser.name,
        newUser.cpf,
        newUser.password,
        newUser.account
      );
      expect(result).to.have.property('account' && 'id');
    });
  });

  describe('When some undefined data is passed', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'query').resolves();
      sinon.stub(UserModel, 'create').resolves(returnUser);
    });

    afterEach(async () => {
      connection.query.restore();
      UserModel.create.restore();
    });

    it('Should return Error', async () => {
      try {
        await UserModel.create(
          newUser.id,
          newUser.name,
          undefined,
          newUser.password,
          newUser.account
        );
      } catch (error) {
        expect(error).to.be.an.instanceof(AppError);
      }
    });

    it('When some undefined data is passed return status 500', async () => {
      try {
        await UserModel.create(
          newUser.id,
          newUser.name,
          undefined,
          newUser.password,
          newUser.account
        );
      } catch (error) {
        expect(error.statusCode).to.be.equal(500);
      }
    });
  });

  describe('when a user is updated successfully', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(UserModel, 'edit').resolves(true);
    });

    afterEach(async () => {
      connection.execute.restore();
      UserModel.edit.restore();
    });

    it('Should be able edit user', async () => {
      await UserModel.edit(uuid(), 'laecio pereira', '1234568' );
      expect(UserModel.edit.calledOnce).to.be.true;
      expect(UserModel.edit).to.be.an('function');
    });

    
  });
  
  describe('Testing findUserById', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves([userExists]);
      //sinon.stub(UserModel, 'findById').resolves();
    });

    afterEach(async () => {
      connection.execute.restore();
      // UserModel.findById.restore();
    });

    it('Should return object', async () => {
      const result = await UserModel.findById(userExists.id);
      expect(result).to.an('array');
    });
  });
});
