import Validator from "validatorjs";
import config from "../../config/config";

Validator.useLang("en");
// Validator.useLang(process.env.LANG || "en");
const Validatorjs = Validator;

export default Validatorjs;
