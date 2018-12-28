const userController = require('./controllers/user');

exports.init = app => {
  app.post('/user/sessions', [], userController.signIn);
  app.post('/user', [], userController.create);
};
