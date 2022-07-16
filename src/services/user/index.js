import { v4 as uuid } from 'uuid';
import AppError from '../../errors/AppError.js';
import UserModel from '../../models/User/index.js';

const create = async (name, cpf, password) => {
  const [userExists] = await UserModel.findByCpf(cpf);

  if (userExists) throw new AppError('Usuário já existe', 409);

  const user = await UserModel.create(uuid(), name, cpf, password);

  return user;
};

export default { create };
