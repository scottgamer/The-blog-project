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
    handler: [usersController.postUser]
  }
];
