import runGame from '../index.js'
import { isPrime, getRandomNumber } from '../gamesModules.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getRoundData = () => {
  const number = getRandomNumber(1, 1000)

  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return [number, correctAnswer]
}

export default () => runGame(description, getRoundData)
