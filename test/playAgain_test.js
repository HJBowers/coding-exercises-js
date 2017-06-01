import { expect } from 'chai'
import playAgain from '../src/playAgain'

describe('7. Play it again, JavaScript!', () => {
  it('expects playAgain() to be a function', () => {
    expect(playAgain).to.be.a('function');
  })
})
