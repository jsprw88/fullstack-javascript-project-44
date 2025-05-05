import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRoundData = () => {
    const number = getRandomNumber(1, 1000);

    let correctAnswer;

    if (number <= 1) {
        correctAnswer = 'no';
      } else if (number === 2) {
        correctAnswer = 'yes';
      } else if (number % 2 === 0) {
        correctAnswer = 'no';
      } else {
        correctAnswer = 'yes';
        
        for (let i = 3; i <= Math.sqrt(number); i += 2) {
          if (number % i === 0) {
            correctAnswer = 'no';
            break;
          }
        }
      }
    

  
    return [number, correctAnswer];
  };
    
    export default () => runGame(description, getRoundData);