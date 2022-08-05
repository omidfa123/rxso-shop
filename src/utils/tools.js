import { compare, hash } from 'bcryptjs';

export const passwordHash = async password => {
  const salt = await hash(password, 10);
  return salt;
};

export const passwordCompare = async (password, hash) => {
  const result = await compare(password, hash);
  return result;
};
