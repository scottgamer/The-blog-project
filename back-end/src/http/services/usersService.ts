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

export const getUser = async (id: string) => {
  const user = await usersRepository.findById(id);
  return user;
};
