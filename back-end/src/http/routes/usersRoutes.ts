import * as usersController from "../controllers/usersController";

export default [
  {
    path: "/users",
    method: "get",
    handler: [usersController.getUsers]
  }
];
