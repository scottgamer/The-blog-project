import express from "express";
import mongoose from "mongoose";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import routes from "./routes";
import config from "./config/config";

mongoose
  .connect(config.mongoConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    const app = express();
    applyMiddleware(middleware, app);
    applyRoutes(routes, app);

    const { PORT = 3000 } = process.env;
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch(error => console.log(error));
