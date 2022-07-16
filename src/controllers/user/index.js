import userService from '../../services/user/index.js';

const create = async (request, response) => {
  const { name, cpf, password } = request.body;
  const user = await userService.create(name, cpf, password);
  response.status(201).json({ token: user.token });
};

export default { create };
