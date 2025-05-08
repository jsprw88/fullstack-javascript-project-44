import runGame from "../index.js";
import getRandomNumber from "../utils.js";
import getGcd from "../getGcd.js";

const description = "Find the greatest common divisor of given numbers.";

const getRoundData = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();

  let result = getGcd(a, b);

  const question = `${a} ${b}`;
  return [question, result];
};

export default () => runGame(description, getRoundData);
