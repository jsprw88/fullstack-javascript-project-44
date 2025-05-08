import runGame from "../index.js";
import { getRandomNumber } from "../utils.js";

const description = "Find the greatest common divisor of given numbers.";

const getRoundData = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();

  let num1 = a;
  let num2 = b;

  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  const question = `${a} ${b}`;
  return [question, num1];
};

export default () => runGame(description, getRoundData);
