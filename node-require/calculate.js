/* eslint-disable no-console */
const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');
const firstArg = parseFloat(process.argv[2]);
const operator = process.argv[3];
const secondArg = parseFloat(process.argv[4]);

if (operator === 'plus') {
  console.log('result: ', add(firstArg, secondArg));
} else if (operator === 'minus') {
  console.log('result: ', subtract(firstArg, secondArg));
} else if (operator === 'times') {
  console.log('result: ', multiply(firstArg, secondArg));
} else if (operator === 'over') {
  console.log('result: ', divide(firstArg, secondArg));
}
