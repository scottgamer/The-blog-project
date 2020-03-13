import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import * as usersRepository from "../repositories/usersRepository";
import IUser from "../interfaces/userInterface";
import config from "../../config/config";

export const signUp = async (user: IUser) => {
  const { username, email, password } = user;
  const hashedPassword = await bcrypt.hash(password, 12);

  const result = await usersRepository.save(username, email, hashedPassword);
  return result;
};

export const login = async (user: IUser) => {
  const { username, password } = user;
  const foundUser = await usersRepository.findByUsername(username);

  if (!(await bcrypt.compare(password, foundUser.password))) {
    throw new Error("Password is incorrect");
  }

  const token = jwt.sign({ foundUser }, config.jwtSecret, { expiresIn: 3600 });
  return { userId: foundUser.id, token, expiration: 3600 };
};

export const getUsers = async () => {
  const users = await usersRepository.findAll();
  const transformerUsers = users.map(user => {
    const newUser = { _id: user._id, username: user.username, email: user.email };
    return newUser;
  });
  return transformerUsers;
};

export const getUser = async (id: string) => {
  const user = await usersRepository.findById(id);
  return user;
};

export const deleteUser = async (id: string) => {
  const user = await usersRepository.findById(id);
  if (!user._doc) {
    throw new Error("The user Id does not exist");
  }
  const deletedUser = await usersRepository.deleteById(user._id);
  return { deleted: deletedUser };
};
