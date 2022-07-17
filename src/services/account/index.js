import AccountModel from '../../models/Account/index.js';

const deposit = async (accountNumber, value) => {
  await AccountModel.deposit(accountNumber, value);
};

export default { deposit };
