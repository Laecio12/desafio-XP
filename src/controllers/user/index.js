import userService from '../../services/user/index.js';

const create = async (request, response) => {
  const { Nome: name, CPF: cpf, Senha: password } = request.body;
  const user = await userService.create(name, cpf, password);
  response.status(201).json(user);
};

const createSession = async (request, response) => {
  const { CPF: cpf, Senha: password } = request.body;
  const token = await userService.createSession(cpf, password);
  response.status(200).json(token);
};

const edit = async (request, response) => {
  const { id } = request.user;
  const {
    Nome: name, Senha: password,
  } = request.body;
  await userService.edit(id, name, password);
  response.status(200).json({ message: 'Dados atualizados com sucesso!' });
};

export default { create, createSession, edit };
