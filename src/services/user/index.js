import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';
import AppError from '../../errors/AppError.js';
import UserModel from '../../models/User/index.js';
import generateJWT from '../../utils/generateJWT.js';
import generateNumberAccount from '../../utils/generateNumberAccount.js';

const create = async (name, cpf, password) => {
  const [userExists] = await UserModel.findByCpf(cpf);

  if (userExists) throw new AppError('Usuário já existe', 409);

  const hashPassword = await bcrypt.hash(password, 8);

  const { id, account } = await UserModel
    .create(uuid(), name, cpf, hashPassword, generateNumberAccount());

  const token = await generateJWT({ id });

  return {
    account,
    token,
  };
};

const getUserById = async (id) => {
  const [user] = await UserModel.findById(id);
  if (!user) throw new AppError('Usuário não existe', 404);
  return user;
};

export default { create, getUserById };
