import runGame from '../index.js';

const description = 'What is the result of the expression?';

const getRoundData = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let result;
  switch (operator) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
  }

  const question = `${num1} ${operator} ${num2}`;
  return [question, result];
};

export default () => runGame(description, getRoundData);
