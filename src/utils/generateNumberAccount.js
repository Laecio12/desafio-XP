import crypto from 'crypto';

const generateNumberAccount = () => {
  const accountNumber = `${crypto.randomInt(111111, 999999)}-0`;
  return accountNumber;
};

export default generateNumberAccount;
