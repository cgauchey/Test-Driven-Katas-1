const twoSum = require('./twoSum.js')
const { expect } = require('chai')

describe ('twoSum', () => {
  it ('finds two distinct elements that sum up to a specified target and return their indices as an array', () => {
    var input = twoSum([1, 2, 3], 5);
    expect(input).to.eql([1,2])

  })
})
