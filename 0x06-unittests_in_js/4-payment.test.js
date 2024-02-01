const sinon = require('sinon');
const Utils = require('./utils');
const chai = require("chai");
const expect = chai.expect;
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('test that sendPaymentRequestToApi reieved the sent inputs', () => {
    const utilsStub = sinon.stub(Utils, 'calculateNumber').returns(10);;
    const logSpy = sinon.spy(console, 'log');
    

    sendPaymentRequestToApi(100, 20);

    expect(utilsStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(utilsStub.callCount).to.be.equal(1);
    expect(logSpy.calledWithExactly('The total is: 10'));

    utilsStub.restore();
    logSpy.restore();
  });
});
