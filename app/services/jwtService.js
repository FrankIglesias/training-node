const bcrypt = require('bcryptjs'),
  jwt = require('jwt-simple'),
  moment = require('moment'),
  logger = require('../logger'),
  errors = require('../errors');

exports.comparePasswords = (password, user) =>
  bcrypt.compare(password, user.password).then(equals => {
    if (!equals) throw errors.forbiddenError;
    logger.info('Valid credentials');
    const creationDate = moment();
    const token = jwt.encode(
      { email: user.email, creationDate, expirationDate: creationDate.add('days', 2) },
      '123'
    );
    return { user, token };
  });
