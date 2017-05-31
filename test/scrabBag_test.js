import { expect } from 'chai'
import scrabBag from '../src/scrabBag'

describe('2. Scrab Bag', function() {
  var playedTiles = "AEREAOXMYCNS_B"

  it('should be a function', function(){
    expect(scrabBag).to.be.a('function')
  })

  it('returns the number of remaining letters, per letter', function() {
    expect(scrabBag(playedTiles)).to.deep.equal("10: E\n9: I\n8: \n7: A,O\n6: T\n5: N,R\n4: L,U,D\n3: S,G\n2: P,F,H,V,W\n1: _,B,C,M,Y,K,J,Q,Z\n0: X"
    )
  })
})
