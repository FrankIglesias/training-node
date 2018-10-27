const userController = require('./controllers/user'),
  albumController = require('./controllers/album'),
  authValidator = require('./middlewares/auth');

exports.init = app => {
  app.post('/user', [], userController.create);
  app.post('/user/sessions', [], userController.signIn);
  app.get('/users', [authValidator.validCredentials], userController.getUsers);
  app.get('/albums', [authValidator.validCredentials], albumController.getAlbums);
  app.post('/admin/user', [], userController.createAdmin);
  // app.put('/endpoint/put/path', [], controller.methodPUT);
  // app.post('/endpoint/post/path', [], controller.methodPOST);
};
