const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Regex integration test', () => {
  const url = 'http://localhost:7865';
  it('test status code and res', (done) => {
    request.get(`${url}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  
  it('test valid id', (done) => {
    request.get(`${url}/cart/25`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 25');
      done();
    });
  });

  it('test not an id number', (done) => {
    request.get(`${url}/cart/fhsfgh`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
