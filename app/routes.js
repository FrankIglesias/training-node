const userController = require('./controllers/user'),
  authValidator = require('./middlewares/auth');

exports.init = app => {
  app.post('/user', [], userController.create);
  app.post('/user/sessions', [], userController.signIn);
  app.get('/users', [authValidator.validCredentials], userController.getUsers);
  app.post('/admin/user', [], userController.createAdmin);
};
