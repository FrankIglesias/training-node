const User = require('../models').User;

exports.findByEmail = email =>
  User.find({
    where: {
      email
    }
  });

exports.createUser = body => User.create(body);

exports.getUsers = ({ page = 0, limit = 20 }) =>
  User.findAll({ offset: page * limit, limit }).then(users => {
    return new Promise(resolve => {
      resolve({
        page: users,
        current_page: page + 1
      });
    });
  });
