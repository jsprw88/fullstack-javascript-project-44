import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';

const name = getName();
console.log('What is the result of the expression?');

export const getCalc = () => { 
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const firstNum = Math.floor(Math.random() * 100) + 1;
    const secondNum = Math.floor(Math.random() * 100) + 1;

    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];

    console.log(`Question: ${firstNum} ${randomOperator} ${secondNum}`);
    const input = readlineSync.question('Your answer: ');

    let correctAnswer;
    switch (randomOperator) {
      case '+':
        correctAnswer = firstNum + secondNum;
        break;
      case '-':
        correctAnswer = firstNum - secondNum;
        break;
      case '*':
        correctAnswer = firstNum * secondNum;
        break;
    }

    if (Number(input) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
