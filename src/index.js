import readlineSync from "readline-sync";
import { getName } from "./gamesModules.js";

const roundsCount = 3;

const runGame = (description, getRoundData) => {
  console.log("Welcome to the Brain Games!");
  const name = getName();
  console.log(description);

  for (let i = 0; i < roundsCount; i++) {
    const [question, correctAnswer] = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer !== String(correctAnswer)) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log("Correct!");
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
