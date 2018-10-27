const jwt = require('jwt-simple'),
  errors = require('../errors'),
  User = require('../services/user');

exports.validCredentials = (req, res, next) => {
  const token = req.headers.authorization;
  const { email, expirationDate } = jwt.decode(token, '123');
  if (new Date() > new Date(expirationDate)) next(errors.expiredTokenError);
  User.findByEmail(email).then(user => {
    if (!user) next(errors.unauthorizedError);
    req.user = user;
    next();
  });
};
