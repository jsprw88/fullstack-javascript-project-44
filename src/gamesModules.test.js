import { calculate } from './gamesModules.js'

if (calculate(2, '+', 3) !== 5) {
  throw new Error('Addition operation failed')
}

if (calculate(5, '-', 2) !== 3) {
  throw new Error('Subtraction operation failed')
}

if (calculate(4, '*', 3) !== 12) {
  throw new Error('Multiplication operation failed')
}

if (calculate(10, '/', 2) !== 5) {
  throw new Error('Division operation failed')
}

if (!Number.isNaN(calculate(10, '/', 0))) {
  throw new Error('Division by zero did not return NaN')
}
console.log('All tests passed!')
