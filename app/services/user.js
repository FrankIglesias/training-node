const User = require('../models').User;

exports.findByEmail = email =>
  User.find({
    where: {
      email
    }
  });

exports.createUser = body => User.create(body);
