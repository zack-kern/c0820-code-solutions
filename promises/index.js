/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');
var name = takeAChance('Zack Kern');
name.then((resolve, reject) => {
  if (resolve !== undefined) {
    console.log(resolve);
  } else {
    console.log(reject.error);
  }
});
