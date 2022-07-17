import { v4 as uuid } from 'uuid';

import AppError from '../../errors/AppError.js';
import UserModel from '../../models/User/index.js';
import generateJWT from '../../utils/generateJWT.js';
import generateNumberAccount from '../../utils/generateNumberAccount.js';

const create = async (name, cpf, password) => {
  const [userExists] = await UserModel.findByCpf(cpf);

  if (userExists) throw new AppError('Usuário já existe', 409);
  const { id, account } = await UserModel
    .create(uuid(), name, cpf, password, generateNumberAccount());

  const token = await generateJWT({ id });

  return {
    account,
    token,
  };
};

export default { create };
