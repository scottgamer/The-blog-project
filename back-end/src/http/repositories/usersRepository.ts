import User from "../models/userModel";

export const find = async () => {
  const users = await User.find();
  return users;
};

export const save = async (username: string, email: string, password: string) => {
  const user = new User({ username, email, password });
  const result = await user.save();
  return result;
};
