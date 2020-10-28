/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');
var name = takeAChance('Zack Kern');
name.then(resolve => {
  if (resolve !== undefined) {
    console.log(resolve);
  }
})
  .catch(err => {
    console.error(err);
  });
