/* eslint-env mocha */
const wrapFunction = require('./wrap.js')
const { expect } = require('chai')

describe ('Wrap Function', () => {
  it('takes a string and a number as arguments', () => {
    //var fn = function() {wrapFunction()}
    wrapFunction(param1,param2)
    var param1 = 'hello';
    var param2 =  3;
    expect(param1).to.be.a('string')
    expect(param2).to.be.a('number')
  })

  it('breaks line at word boundary', () => {
    var input = wrapFunction("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)
    expect(input).to.eql('Lorem ipsum dolor\n sit eu amet elit na\n magna sem amet nulla\n vel purus ac ligula.')
  })
})
