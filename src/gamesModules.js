import readlineSync from 'readline-sync'
import { randomInt } from 'crypto'

export const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num2 !== 0 ? num1 / num2 : NaN
    default:
      throw new Error(`Unsupported operator: ${operator}`)
  }
}

export const getRandomNumber = (min = 1, max = 100) => randomInt(min, max + 1)

export const generateProgression = (start, step, length) => {
  const progression = []

  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }

  return progression
}

export const getGcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ')
  return userName
}

export const isEven = (number) => number % 2 === 0

export const isPrime = (number) => {
  if (number <= 1) {
    return false
  }
  if (number === 2) {
    return true
  }
  if (number % 2 === 0) {
    return false
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}
