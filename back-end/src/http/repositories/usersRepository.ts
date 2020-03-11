import User from "../models/userModel";
import IUser from "../interfaces/userInterface";

export const find = async () => {
  const users = await User.find();
  return users;
};

export const findByEmail = async (email: string) => {
  const user = (await User.findOne({ email })) as IUser;
  return user;
};

export const findByUsername = async (username: string) => {
  const user = (await User.findOne({ username })) as IUser;
  return user;
};

export const save = async (username: string, email: string, password: string) => {
  const user = new User({ username, email, password });
  const result = await user.save();
  return result;
};
