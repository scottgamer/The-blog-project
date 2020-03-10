import Validator from "validatorjs";
import config from "../../config/config";

Validator.useLang(config.language);

export default Validator;
