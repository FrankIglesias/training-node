const User = require('../models').User,
  logger = require('../logger');

exports.findByEmail = email =>
  User.find({
    where: {
      email
    }
  });

exports.createUser = body =>
  User.create(body).catch(error => {
    logger.error(`Database Error. Details: ${JSON.stringify(error)}`);
    throw error;
  });
