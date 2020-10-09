/* eslint-disable no-console */
var command = process.argv[2];
var myFile = 'data.json';
const fs = require('fs');
if (command === 'read') {
  fs.readFile(myFile, 'utf8', (err, data) => {
    if (err) throw err;
    const parseStuff = JSON.parse(data).notes;
    const countStuff = Object.keys(parseStuff).length;
    for (var i = 1; i <= countStuff; i++) {
      console.log(`${i}: ${parseStuff[i]}`);
    }
  });
}
