const sinon = require('sinon');
const Utils = require('./utils');
const chai = require("chai");
const expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('test that sendPaymentRequestToApi reieved the sent inputs', () => {
    const utilsSpy = sinon.spy(Utils);
    const logSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(utilsSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(utilsSpy.calculateNumber.callCount).to.be.equal(1);
    expect(logSpy.calledWithExactly('The total is: 120'));

    utilsSpy.calculateNumber.restore();
    logSpy.restore();
  });
});
