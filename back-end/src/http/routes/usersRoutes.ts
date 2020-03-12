import * as userValidator from "../validators/userValidator";
import * as usersController from "../controllers/usersController";

export default [
  {
    path: "/users",
    method: "get",
    handler: [usersController.getUsers]
  },
  {
    path: "/users/signUp",
    method: "post",
    handler: [userValidator.validateRegister, usersController.signUp]
  },
  {
    path: "/users/login",
    method: "post",
    handler: [userValidator.validateLogin, usersController.login]
  },
  {
    path: "/users/:id",
    method: "get",
    handler: [usersController.getUser]
  }
];
