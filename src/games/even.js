import runGame from "../index.js";
import { getRandomNumber } from "../utils.js";

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundData = () => {
  const number = getRandomNumber();
  const correctAnswer = number % 2 === 0 ? "yes" : "no";
  return [number, correctAnswer];
};

export default () => runGame(description, getRoundData);
