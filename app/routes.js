const userController = require('./controllers/user');
const albumController = require('./controllers/album');

exports.init = app => {
  app.post('/user', [], userController.create);
  app.post('/user/sessions', [], userController.signIn);
  app.get('/users', [], userController.getUsers);
  app.get('/admin/users', [], userController.getUsers);
  app.get('/albums', [], albumController.getAlbums);
  // app.post('/endpoint/post/path', [], controller.methodPOST);
};
