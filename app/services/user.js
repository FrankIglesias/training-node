const User = require('../models').User,
  logger = require('../logger'),
  errors = require('../errors');

exports.findByEmail = email =>
  User.find({
    where: {
      email
    }
  }).catch(err => {
    logger.error(err);
    throw errors.databaseError(err.detail);
  });

exports.getUsers = ({ page = 0, limit = 20 }) =>
  User.findAll({ offset: page * limit, limit }).then(users => {
    return new Promise(resolve => {
      resolve({
        page: users,
        current_page: page + 1
      });
    });
  });

exports.createUser = body =>
  User.create(body).catch(error => {
    logger.error(error);
    throw errors.databaseError(error.detail);
  });
