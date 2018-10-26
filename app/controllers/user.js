const User = require('../models').User,
  bcrypt = require('bcryptjs'),
  logger = require('../logger');

exports.create = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password)
    return next({ internalCode: 400, message: 'Missing params in body' });
  if (!/[a-z0-9._]@wolox.com.ar/.test(email)) return next({ internalCode: 401, message: 'Invalid email' });
  if (password.length < 8 || !/[0-9a-zA-Z]+/.test(password))
    return next({ internalCode: 401, message: 'Invalid password format' });
  User.find({
    where: {
      email
    }
  }).then(user => {
    if (user) {
      return next({ internalCode: 401, message: 'User already exists' });
    } else {
      bcrypt.hash(req.body.password, 10).then(hash => {
        req.body.password = hash;
        User.create(req.body)
          .then(newUser => {
            logger.info(`User with email ${newUser.email} correctly created`);
            res.status(200).send({ newUser });
          })
          .catch(error => {
            logger.error(`Database Error. Details: ${JSON.stringify(error)}`);
            next(error);
          });
      });
    }
  });
};
