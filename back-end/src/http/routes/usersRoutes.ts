import * as userValidator from "../validators/userValidator";
import * as usersController from "../controllers/usersController";

export default [
  {
    path: "/users",
    method: "get",
    handler: [usersController.getUsers]
  },
  {
    path: "/users",
    method: "post",
    handler: [userValidator.validateRegister, usersController.postUser]
  }
];
