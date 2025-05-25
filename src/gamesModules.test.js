import { strict as assert } from 'node:assert'
import { calculate } from './gamesModules.js'

assert(calculate(2, '+', 3) === 5)
assert(calculate(5, '-', 2) === 3)
assert(calculate(4, '*', 3) === 12)
assert(calculate(10, '/', 2) === 5)
assert(Number.isNaN(calculate(10, '/', 0)))

console.log('All tests passed!')
