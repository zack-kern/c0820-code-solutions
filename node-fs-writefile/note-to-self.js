/* eslint-disable no-console */
const fs = require('fs');
var myFile = 'note.txt';
var userInput = process.argv[2];
fs.writeFile(myFile, userInput, 'utf8', (err, data) => {
  if (err) throw err;
});
