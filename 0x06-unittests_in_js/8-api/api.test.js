const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Basic integration test', () => {
  it('test status code and res', (done) => {
    request.get(`http://localhost:7865/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
