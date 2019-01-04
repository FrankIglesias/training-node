const jwt = require('jwt-simple'),
  moment = require('moment'),
  errors = require('../errors'),
  User = require('../services/user');

exports.validCredentials = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return next(errors.unauthorizedError);
  const { email, expirationDate } = jwt.decode(token, '123');
  if (moment().isAfter(moment(expirationDate))) return next(errors.expiredTokenError);
  User.findByEmail(email).then(user => {
    if (!user) return next(errors.unauthorizedError);
    req.user = user;
    return next();
  });
};
