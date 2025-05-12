import readlineSync from "readline-sync";

export const calculate = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
};

export const getRandomNumber = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  return progression;
};

export const getGcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export const getName = () => {
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const isEven = (number) => number % 2 === 0;

export const isPrime = (number) => {
  if (number <= 1) {
    return "no";
  } else if (number === 2) {
    return "yes";
  } else if (number % 2 === 0) {
    return "no";
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return "no";
    }
  }

  return "yes";
};
