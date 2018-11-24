const User = require('../services/user'),
  JwtService = require('../services/jwtService'),
  bcrypt = require('bcryptjs'),
  errors = require('../errors'),
  logger = require('../logger'),
  jwt = require('jwt-simple'),
  moment = require('moment');

const woloxEmail = /[a-z0-9._]@wolox.com.ar/;
const passwordRegex = /[0-9a-zA-Z]+/;

exports.create = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) return next(errors.missingParamsError);
  if (!woloxEmail.test(email)) return next(errors.invalidEmailError);
  if (password.length < 8 || !passwordRegex.test(password)) return next(errors.invalidPasswordFormatError);
  User.findByEmail(email)
    .then(user => {
      if (user) {
        return next(errors.userAlreadyExistsError);
      } else {
        bcrypt.hash(req.body.password, 10).then(hash => {
          req.body.password = hash;
          User.createUser(req.body).then(newUser => {
            logger.info(`User with email ${newUser.email} correctly created`);
            res.status(201).send({ newUser });
          });
        });
      }
    })
    .catch(next);
};

exports.signIn = (req, res, next) => {
  const { email, password } = req.body;
  if (!woloxEmail.test(email)) return next(errors.invalidEmailError);
  User.findByEmail(email)
    .then(user => {
      if (!user) {
        logger.error('User does not exists');
        throw errors.forbiddenError;
      } else {
        JwtService.comparePasswords(password, user).then(response => {
          res.status(200).send(response);
        });
      }
    })
    .catch(next);
};
