import AdministrativeModel from '../../models/ Administrative/index.js';

const getAllUsers = async () => {
  const users = AdministrativeModel.getAllUsers();
  return users;
};

export default { getAllUsers };
