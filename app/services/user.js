const User = require('../models').User,
  logger = require('../logger'),
  errors = require('../errors');

exports.findByEmail = email =>
  User.find({
    where: {
      email
    }
  }).catch(error => {
    logger.error(`Database Error. Details: ${JSON.stringify(error)}`);
    throw error.databaseError(error.detail);
  });

exports.createUser = body =>
  User.create(body).catch(error => {
    logger.error(`Database Error. Details: ${JSON.stringify(error)}`);
    throw error.databaseError(error.detail);
  });
