import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';


    const name = getName();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const getEven = () => { 
let correctAnswersCount = 0;
    while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log('Question: ' + randomNumber);
    const input = readlineSync.question('Your answer: ');

    const isEven = randomNumber % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';

    if (input === correctAnswer) {
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