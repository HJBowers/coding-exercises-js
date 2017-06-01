import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', () => {

    it('expects fibonacci to be a function', () => {
      expect(fibonacci).to.be.a('function')
    })

    it('expects fibonacci(\'decimal 16\') to equal \'1001000\'', () => {
      expect(fibonacci('decimal 16')).to.equal('1001000')
    })

    it('expects fibonacci(\'decimal 31\') to equal \'10100100\'', () => {
      expect(fibonacci('decimal 31')).to.equal('10100100')
    })

    it('expects fibonacci(\'decimal 100\') to equal \'10000101000\'', () => {
      expect(fibonacci('decimal 100')).to.equal('10000101000')
    })

    it('expects fibonacci(\'decimal 21\') to equal \'10000000\'', () => {
      expect(fibonacci('decimal 21')).to.equal('10000000')
    })

    it('expects fibonacci(\'fib 11111\') to equal 12', () => {
      expect(fibonacci('fib 11111')).to.equal('12')
    })

    it('expects fibonacci(\'fib 1101001\') to equal 25', () => {
      expect(fibonacci('fib 1101001')).to.equal('25')
    })

    it('expects fibonacci(\'fib 11101111\') to equal 49', () => {
      expect(fibonacci('fib 11101111')).to.equal('49')
    })

    it('expects fibonacci(\'fib 10\') to equal 1', () => {
      expect(fibonacci('fib 10')).to.equal('1')
    })

  })
