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
    request.get(`${url}/cart/25`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 25');
      done();
    });
  });

  it('test not an id number', (done) => {
    request.get(`${url}/cart/fhsfgh`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('test obj', (done) => {
    request.get(`${url}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });

  it('test login', (done) => {
    request.post(`${url}/login`, {json: {userName: 'Betty'}}, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Betty');
      done();
    });
  });
});
