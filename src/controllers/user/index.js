import userService from '../../services/user/index.js';

const create = async (request, response) => {
  const { name, cpf, password } = request.body;
  const user = await userService.create(name, cpf, password);
  response.status(201).json(user);
};

const createSession = async (request, response) => {
  const { cpf, password } = request.body;
  const token = await userService.createSession(cpf, password);
  response.status(200).json(token);
};

export default { create, createSession };
