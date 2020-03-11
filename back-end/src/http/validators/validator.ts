import Validator from "validatorjs";
import config from "../../config/config";

Validator.useLang("en");
// Validator.useLang(config.language);
const Validatorjs = Validator;

export default Validatorjs;
