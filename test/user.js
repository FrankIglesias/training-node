const chai = require('chai'),
  dictum = require('dictum.js'),
  server = require('./../app'),
  should = chai.should();

describe('/user POST', () => {
  it('should fail when email already exists', () => {
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
          .then(res => {
            res.should.have.status(401);
            res.should.be.json;
            dictum.chai(res, 'description for endpoint');
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

describe('/user/sessions POST', () => {
  it('Login fails with invalid email', () => {
    chai
      .request(server)
      .post('/user/sessions')
      .send({
        email: 'francisco.iglesias+4231@wolox.com.ar',
        password: '12345678'
      })
      .then(res => {
        res.should.have.status(401);
        res.should.be.json;
        dictum.chai(res, 'description for endpoint');
      });
  });
  it('Login fails with invalid password', () => {
    chai
      .request(server)
      .post('/user/sessions')
      .send({
        email: 'francisco.iglesias+1@wolox.com.ar',
        password: '3842942304234'
      })
      .then(res => {
        res.should.have.status(401);
        res.should.be.json;
        dictum.chai(res, 'description for endpoint');
      });
  });
});
