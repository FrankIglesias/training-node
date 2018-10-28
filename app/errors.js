const internalError = (message, internalCode) => ({
  message,
  internalCode
});

const DEFAULT_ERROR = 'default_error';
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);

const FORBIDDEN_ERROR = 'Forbidden error';
exports.forbiddenError = { internalCode: 403, message: FORBIDDEN_ERROR };

const MISSING_PARAMS_ERROR = 'Params missing';
exports.missingParamsError = { internalCode: 422, message: MISSING_PARAMS_ERROR };

const USER_ALREADY_EXISTS_ERROR = 'User already exists';
exports.userAlreadyExistsError = { internalCode: 400, message: USER_ALREADY_EXISTS_ERROR };

const INVALID_EMAIL_ERROR = 'Email is invalid';
exports.invalidEmailError = { internalCode: 422, message: INVALID_EMAIL_ERROR };

const INVALID_PASSWORD_FORMAT = 'Password format is invalid';
exports.invalidPasswordFormatError = { internalCode: 422, message: INVALID_PASSWORD_FORMAT };
