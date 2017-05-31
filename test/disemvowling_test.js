import { expect } from 'chai'
import disemvowling from '../src/disemvowling'

describe('4. Disemvowling', function() {
  var phrase = "i am groot"

  it('should be a function', function() {
    expect(disemvowling).to.be.a('function')
  })

  it('removes all vowels', function() {
    expect(disemvowling(phrase)).to.deep.equal("mgrt"
    )
  })
})
