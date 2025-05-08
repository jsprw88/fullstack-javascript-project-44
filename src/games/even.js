import runGame from "../index.js";
import getRandomNumber from "../utils.js";
import isEven from "../isEven.js";

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundData = () => {
  const number = getRandomNumber();
  const correctAnswer = isEven(number) ? "yes" : "no";
  return [number, correctAnswer];
};

export default () => runGame(description, getRoundData);

