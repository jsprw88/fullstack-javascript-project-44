import runGame from "../index.js";
import { generateProgression, getRandomNumber } from "../gamesModules.js";

const description = "What number is missing in the progression?";

const getRoundData = () => {
  const length = 10;
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(2, 5);

  const progression = generateProgression(start, step, length);

  const randomIndex = getRandomNumber(0, progression.length - 1);
  const hiddenValue = progression[randomIndex];

  progression[randomIndex] = "..";

  const question = progression.join(" ");
  return [question, hiddenValue];
}

export default () => runGame(description, getRoundData);
