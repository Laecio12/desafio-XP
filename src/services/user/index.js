import { v4 as uuid } from 'uuid';
import UserModel from '../../models/User/index.js';

const create = async (name, cpf, password) => {
  const user = await UserModel.create(uuid(), name, cpf, password);

  return user;
};

export default { create };
