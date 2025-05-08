import runGame from "../index.js";
import getRandomNumber from "../utils.js";
import isPrime from "../isPrime.js";

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRoundData = () => {
  const number = getRandomNumber(1, 1000);

  const correctAnswer = isPrime(number);

  return [number, correctAnswer];
};

export default () => runGame(description, getRoundData);
