import User from '../models/user.model';

export const userExists = async (email: string) => {
  const user = await User.findOne({ email });
  if (user) return true;
  return false;
};

export const findUser = async (email: string) => {
  const user = await User.findOne({ email });
  return user;
};

export const getAllUsers = async () => {
  const users = await User.find();
  return users;
};
