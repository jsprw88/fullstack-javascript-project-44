import runGame from "../index.js";
import getRandomNumber from "../utils.js";
import calculate from "../calculate.js";

const description = "What is the result of the expression?";

const getRoundData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operators = ["+", "-", "*"];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let result = calculate(num1, operator, num2);
 

  const question = `${num1} ${operator} ${num2}`;
  return [question, result];
};

export default () => runGame(description, getRoundData);
