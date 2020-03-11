import {
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleHelmet,
  handleIsAuth
} from "./common";

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleHelmet,
  handleIsAuth
];
