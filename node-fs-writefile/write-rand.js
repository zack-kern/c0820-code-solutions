/* eslint-disable no-console */
const fs = require('fs');
var myFile = 'random.txt';
var rand = Math.random();
fs.writeFile(myFile, rand, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(rand);
});
