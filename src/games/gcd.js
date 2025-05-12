import runGame from "../index.js";
import { getGcd, getRandomNumber } from "../gamesModules.js";

const description = "Find the greatest common divisor of given numbers.";

const getRoundData = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();

  const result = getGcd(a, b);

  const question = `${a} ${b}`;
  return [question, result];
}

export default () => runGame(description, getRoundData);
