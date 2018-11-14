const chai = require('chai'),
  dictum = require('dictum.js'),
  server = require('./../app'),
  should = chai.should();

describe('/user POST', () => {
  it('should fail when email already exists', done => {
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
            res.should.have.status(400);
            res.response.body.should.have.property('message');
            done();
          });
      });
  });
  it('should fail when password does not fullfil minimum length', done => {
    chai
      .request(server)
      .post('/user')
      .send({
        firstName: 'Stephen',
        lastName: 'Strange',
        email: 'steph.strange@wolox.com.ar',
        password: '123'
      })
      .catch(res => {
        res.should.have.status(422);
        res.response.body.should.have.property('message');
        done();
      });
  });
  it('should fail when params are missing', done => {
    chai
      .request(server)
      .post('/user')
      .send({
        firstName: 'Stephen',
        email: 'steph.strange@wolox.com.ar',
        password: '123waerdfg'
      })
      .catch(res => {
        res.should.have.status(422);
        res.response.body.should.have.property('message');
        done();
      });
  });
});

describe('/user/sessions POST', () => {
  it('Login fails with invalid email', done => {
    chai
      .request(server)
      .post('/user/sessions')
      .send({
        email: 'francisco.iglesias+4231@wolox.com.ar',
        password: '12345678'
      })
      .catch(res => {
        res.should.have.status(404);
        res.response.body.should.have.property('message');
        done();
      });
  });
  it('Login fails with invalid password', done => {
    chai
      .request(server)
      .post('/user/sessions')
      .send({
        email: 'francisco.iglesias+1@wolox.com.ar',
        password: '3842942304234'
      })
      .catch(res => {
        res.should.have.status(404);
        res.response.body.should.have.property('message');
        done();
      });
  });
});
