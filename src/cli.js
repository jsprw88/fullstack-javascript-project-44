import readlineSync from 'readline-sync';
export const getName = () => {
    var userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
}