import { calculate } from './gamesModules.js'

if (calculate(2, '+', 3) !== 5) {
  throw new Error('Ошибка в операции сложения')
}

if (calculate(5, '-', 2) !== 3) {
  throw new Error('Ошибка в операции вычитания')
}

if (calculate(4, '*', 3) !== 12) {
  throw new Error('Ошибка в операции умножения')
}

if (calculate(10, '/', 2) !== 5) {
  throw new Error('Ошибка в операции деления')
}

if (!Number.isNaN(calculate(10, '/', 0))) {
  throw new Error('Ошибка при делении на ноль')
}
console.log('Все тесты пройдены!')
