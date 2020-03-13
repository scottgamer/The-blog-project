import User from "../models/userModel";
import IUser from "../interfaces/userInterface";

export const findAll = async () => {
  const users = (await User.find()) as IUser[];
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

export const findById = async (_id: string) => {
  const user = (await User.findOne({ _id })) as IUser;
  return user._doc;
};

export const save = async (username: string, email: string, password: string) => {
  const user = new User({ username, email, password });
  const result = await user.save();
  return result;
};

export const deleteById = async (_id: string) => {
  const deletedUser = (await User.deleteOne({ _id })) as IUser;
  return !!deletedUser;
};

export const updateOne = async (_id: string, userData: IUser) => {
  const updatedUser = (await User.findOneAndUpdate({ _id }, userData)) as IUser;
  return updatedUser;
};
