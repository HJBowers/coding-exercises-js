import { expect } from 'chai'
import stringIndices from '../src/stringIndices'

describe('2. StringIndices', () => {
  const phrase = "Catch me outside, how about that?"
  const index = 3
  it("should be a function", function() {
    expect(stringIndices).to.be.a('function')
  })

  it("returns the word at it's index (starting at 1)", function() {
    expect(stringIndices(phrase, index)).to.equal("outside")
  })
})
