const internalError = (message, internalCode) => ({
  message,
  internalCode
});

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);

exports.FORBIDDEN_ERROR = 'Forbidden error';
exports.forbiddenError = { internalCode: 403, message: exports.FORBIDDEN_ERROR };

exports.MISSING_PARAMS_ERROR = 'Params missing';
exports.missingParamsError = { internalCode: 422, message: exports.MISSING_PARAMS_ERROR };

exports.USER_ALREADY_EXISTS_ERROR = 'User already exists';
exports.userAlreadyExistsError = { internalCode: 400, message: exports.USER_ALREADY_EXISTS_ERROR };

exports.INVALID_EMAIL_ERROR = 'Email is invalid';
exports.invalidEmailError = { internalCode: 422, message: exports.INVALID_EMAIL_ERROR };

exports.INVALID_PASSWORD_FORMAT = 'Password format is invalid';
exports.invalidPasswordFormatError = { internalCode: 422, message: exports.INVALID_PASSWORD_FORMAT };

exports.USER_DOES_NOT_EXISTS = 'User not found';
exports.userDoesNotExists = { internalCode: 404, message: exports.USER_DOES_NOT_EXISTS };
