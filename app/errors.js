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

exports.USER_DOES_NOT_EXISTS = 'User not found';
exports.userDoesNotExists = { internalCode: 404, message: exports.USER_DOES_NOT_EXISTS };

exports.EXPIRED_TOKEN_ERROR = 'Token expired';
exports.expiredTokenError = { internalCode: 404, message: exports.EXPIRED_TOKEN_ERROR };

exports.UNAUTHORIZED_ERROR = 'Not authorized';
exports.unauthorizedError = { internalCode: 401, message: exports.UNAUTHORIZED_ERROR };

const DATABASE_ERROR = 'database_error';
exports.databaseError = message => internalError(DATABASE_ERROR, [message]);
