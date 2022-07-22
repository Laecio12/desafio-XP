import administrativeService from '../../services/ administrative/index.js';

const getAllUsers = async (request, response) => {
  const users = await administrativeService.getAllUsers();
  return response.json(users);
};

export default { getAllUsers };
