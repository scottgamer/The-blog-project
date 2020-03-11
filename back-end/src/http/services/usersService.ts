import * as usersRepository from "../repositories/usersRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import IUser from "../interfaces/userInterface";

export const signUp = async (user: IUser) => {
  const { username, email, password } = user;
  const hashedPassword = await bcrypt.hash(password, 12);

  const result = await usersRepository.save(username, email, hashedPassword);

  return result;
};
