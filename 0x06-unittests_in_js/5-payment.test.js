const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi function', () => {
  let logSpy;

  beforeEach(() => logSpy = sinon.spy(console, 'log'));
  afterEach(() => logSpy.restore());

  it('test sendPaymentRequestToAPI(100, 20) log message', () => {
    sendPaymentRequestToApi(100, 20);
    expect(logSpy.calledOnce).to.be.true;
    expect(logSpy.calledWith('The total is: 120')).to.be.true;
  });
  it('test sendPaymentRequestToAPI(10, 10) log message', () => {
    sendPaymentRequestToApi(10, 10);
    expect(logSpy.calledOnce).to.be.true;
    expect(logSpy.calledWith('The total is: 20')).to.be.true;
  });
});
