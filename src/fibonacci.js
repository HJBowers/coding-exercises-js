export default function fibonacci(input) {
  input = input.split(' ')
  let type = input[0]
  let number = input[1]
  let fibArr = [1]

  let fibSeq = () => {
    if (fibArr.length === 1) {
      fibArr.unshift(1)
    } else {
      fibArr.unshift(fibArr[0] + fibArr[1])
    }
  }

  if (type === 'decimal') {
    while (number >= fibArr[0]) {
      fibSeq()
    }
    fibArr.shift(0)

    let fibBase = ''
    for (var i = 0; i < fibArr.length; i++) {
      if(number >= fibArr[i]) {
        fibBase += '1'
        number -= fibArr[i]
      } else {
        fibBase += '0'
      }
    }
    return fibBase

  } else if (type === 'fib') {
    let toDecimal = 0
    let inputArr = number.split('')

    while (inputArr.length > fibArr.length) {
      fibSeq()
    }

    for (var i = inputArr.length - 1 ; i >= 0; i--) {
      toDecimal += fibArr[i]*inputArr[i]
    }
    return toDecimal.toString()
  }
}
