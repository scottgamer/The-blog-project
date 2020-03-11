import Validator from "./validator";
import * as userRepository from "../repositories/usersRepository";

Validator.registerAsync(
  "email_available",
  async (email: string, args, req, passes) => {
    if (await userRepository.findByEmail(email)) {
      passes(false);
    }
    passes();
  },
  "The email is already registered"
);

Validator.registerAsync(
  "username_available",
  async (username: string, args, req, passes) => {
    if (await userRepository.findByUsername(username)) {
      passes(false);
    }
    passes();
  },
  "The username is already registered"
);

Validator.registerAsync(
  "username_exists",
  async (username: string, args, req, passes) => {
    if (!(await userRepository.findByUsername(username))) {
      passes(false);
    }
    passes();
  },
  "The username is wrong or does not exist"
);
