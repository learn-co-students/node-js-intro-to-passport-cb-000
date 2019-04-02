const expect = require('chai').expect;

var flatiron = "lazy"

describe('where are the tests', () => {
  it("if its a lab it should have tests", () => {
    expect(flatiron).to.not.equal("this lazy") ;
  })
})
