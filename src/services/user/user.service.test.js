import sinon from 'sinon';
import { expect } from 'chai';
import connection from '../../models/connection.js';
import { v4 as uuid } from 'uuid';
import userService from './index.js';
import UserModel from '../../models/User/index.js';
import generateNumberAccount from '../../utils/generateNumberAccount.js';
import AppError from '../../errors/AppError.js';

const userExists = [
  {
    name: 'laecio',
    cpf: '00000000000',
    password: '$2a$08$RN1tma38XbvOT7N07THozO3ooT3zy7TNPhfxi//AScMIAPDGJTOIW',
  },
];

const valideUser = {
  cpf: '00000000000',
  password: '123456',
};

const invalidUser = {
  cpf: '00000000001',
  password: '1234565',
};

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

describe('Testing the user service layer', () => {
  describe('when a user is created successfully', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(connection, 'query').resolves();
      sinon.stub(UserModel, 'findByCpf').resolves([]);
      sinon.stub(UserModel, 'create').resolves(returnUser);
    });

    afterEach(async () => {
      connection.execute.restore();
      connection.query.restore();
      UserModel.findByCpf.restore();
      UserModel.create.restore();
    });

    it('Should return object', async () => {
      const result = await userService.create(
        newUser.name,
        newUser.cpf,
        newUser.password
      );
      expect(result).to.be.an('object');
    });

    it('Must return an object with account and token properties', async () => {
      const result = await userService.create(
        newUser.name,
        newUser.cpf,
        newUser.password
      );
      expect(result).to.have.property('account' && 'token');
    });
  });

  describe('when a user is created successfully', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(connection, 'query').resolves();
      sinon.stub(UserModel, 'findByCpf').resolves([]);
      sinon.stub(UserModel, 'create').resolves(returnUser);
    });

    afterEach(async () => {
      connection.execute.restore();
      connection.query.restore();
      UserModel.findByCpf.restore();
      UserModel.create.restore();
    });

    it('Should return object', async () => {
      const result = await userService.create(
        newUser.name,
        newUser.cpf,
        newUser.password
      );
      expect(result).to.be.an('object');
    });

    it('Must return an object with account and token properties', async () => {
      const result = await userService.create(
        newUser.name,
        newUser.cpf,
        newUser.password
      );
      expect(result).to.have.property('account' && 'token');
    });
  });

  describe('when a user exist', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(connection, 'query').resolves();
      sinon.stub(UserModel, 'findByCpf').resolves(userExists);
      sinon.stub(UserModel, 'create').resolves(returnUser);
    });

    afterEach(async () => {
      connection.execute.restore();
      connection.query.restore();
      UserModel.findByCpf.restore();
      UserModel.create.restore();
    });

    it('Should return Error', async () => {
      try {
        await userService.create(newUser);
      } catch (error) {
        expect(error).to.be.an.instanceof(AppError);
      }
    });

    it('Should return error with status 409', async () => {
      try {
        await userService.create(newUser);
      } catch (error) {
        expect(error.statusCode).to.be.equal(409);
      }
    });
  });

  describe('Create session successfully', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(UserModel, 'findByCpf').resolves(userExists);
    });

    afterEach(async () => {
      connection.execute.restore();
      UserModel.findByCpf.restore();
    });

    it('Should return Token', async () => {
      const result = await userService.createSession(
        valideUser.cpf,
        valideUser.password
      );
      expect(result).to.have.property('token');
    });
  });

  describe('Create session fail', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(UserModel, 'findByCpf').resolves(userExists);
    });

    afterEach(async () => {
      connection.execute.restore();
      UserModel.findByCpf.restore();
    });

    it('Should return Error', async () => {
      try {
        await userService.createSession(invalidUser.cpf, invalidUser.password);
      } catch (error) {
        expect(error).to.be.an.instanceof(AppError);
      }
    });

    it('Should return Error "Usuário ou senha inválidos!"', async () => {
      try {
        await userService.createSession(invalidUser.cpf, invalidUser.password);
      } catch (error) {
        expect(error.message).to.be.equal('Usuário ou senha inválidos!');
      }
    });

    it('Should return Error with status 401', async () => {
      try {
        await userService.createSession(invalidUser.cpf, invalidUser.password);
      } catch (error) {
        expect(error.statusCode).to.be.equal(401);
      }
    });
  });

  describe('Testing findUserById', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(UserModel, 'findById').resolves(userExists);
    });

    afterEach(async () => {
      connection.execute.restore();
      UserModel.findById.restore();
    });

    it('Should return object', async () => {
      const result = await userService.getUserById(userExists.id);
      expect(result).to.an('object');
    });
    
  });

  describe('Testing update user data', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(true);
      sinon.stub(UserModel, 'edit').resolves(true);
    });

    afterEach(async () => {
      connection.execute.restore();
      UserModel.edit.restore();
    });

    it('Should be able updated user data successfully', async () => {
      await userService.edit(userExists.id, 'laecio pereira', '1234567');
       
       expect(UserModel.edit).to.be.an('function');
       expect(UserModel.edit.calledOnce).to.be.true;
       
    });
    
  });
});
