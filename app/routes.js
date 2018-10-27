const controller = require('./controllers/user');

exports.init = app => {
  app.post('/user', [], controller.create);
  app.post('/user/sessions', [], controller.signIn);
  app.get('/users', [], controller.getUsers);
  // app.put('/endpoint/put/path', [], controller.methodPUT);
  // app.post('/endpoint/post/path', [], controller.methodPOST);
};
