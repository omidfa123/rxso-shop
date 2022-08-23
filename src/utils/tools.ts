import { compare, hash } from 'bcryptjs';

export const passwordHash = async (password: string) => {
  const salt = await hash(password, 10);
  return salt;
};

export const passwordCompare = async (password: string, hash: string) => {
  const result = await compare(password, hash);
  return result;
};
