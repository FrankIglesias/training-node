const chai = require('chai'),
  dictum = require('dictum.js'),
  server = require('./../app'),
  should = chai.should();

// Se debe testear que la creación falle cuando se utilice un mail que se encuentra en uso.
// Se debe testear que la creación falle cuando la contraseña no cumple con los requerimientos.
// Se debe testear que la creación falle cuando no se envíe cualquiera de los parámetros obligatorios.

describe('/user POST', () => {
  it.only('should fail when email already exists', done => {
    chai
      .request(server)
      .post('/user')
      .send({
        firstName: 'Stephen',
        lastName: 'Strange',
        email: 'steph.strange@wolox.com.ar',
        password: '123waerdfg'
      })
      .then(() => {
        chai
          .request(server)
          .post('/user')
          .send({
            firstName: 'Stephen',
            lastName: 'Strange',
            email: 'steph.strange@wolox.com.ar',
            password: '123waerdfg'
          })
          .catch(res => {
            console.log(res);
            // res.should.have.status(401);
            // res.should.be.json;
            // dictum.chai(res, 'description for endpoint');
            done();
          });
      });
  });
  it('should fail when password does not fullfil minimum length', () => {
    chai
      .request(server)
      .post('/user')
      .send({
        firstName: 'Stephen',
        lastName: 'Strange',
        email: 'steph.strange@wolox.com.ar',
        password: '123'
      })
      .then(res => {
        res.should.have.status(401);
        res.should.be.json;
        dictum.chai(res, 'description for endpoint');
      });
  });
  it('should fail when params are missing', () => {
    chai
      .request(server)
      .post('/user')
      .send({
        firstName: 'Stephen',
        email: 'steph.strange@wolox.com.ar',
        password: '123waerdfg'
      })
      .then(res => {
        res.should.have.status(401);
        res.should.be.json;
        dictum.chai(res, 'description for endpoint');
      });
  });
});
