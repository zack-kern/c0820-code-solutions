/* eslint-disable no-console */
const myFile = './data.json';
const dataJ = require('./data.json');
const fs = require('fs');
if (process.argv[2] === 'read') {
  fs.readFile(myFile, 'utf8', (err, data) => {
    if (err) throw err;
    const parseStuff = dataJ.notes;
    const countStuff = Object.keys(parseStuff).length;
    for (var i = 1; i <= countStuff; i++) {
      console.log(`${i}: ${parseStuff[i]}`);
    }
  });
} else if (process.argv[2] === 'create') {
  fs.readFile(myFile, 'utf8', (err, data) => {
    if (err) throw err;
    const parseStuff = dataJ.notes;
    const countStuff = Object.keys(parseStuff).length;
    const countPlus = countStuff + 1;
    parseStuff[countPlus.toString()] = process.argv[3];
    var finalWrite = JSON.stringify(dataJ, null, 2);
    fs.writeFile('data.json', finalWrite, err => {
      if (err) throw err;
    });
  });
} else if (process.argv[2] === 'delete') {
  var deleteKey = process.argv[3].toString();
  delete dataJ.notes[deleteKey];
  var finalWrite = JSON.stringify(dataJ, null, 2);
  fs.writeFile('data.json', finalWrite, err => {
    if (err) throw err;
  });
} else if (process.argv[2] === 'update') {
  dataJ.notes[process.argv[3]] = process.argv[4];
  fs.writeFile('data.json', finalWrite, err => {
    if (err) throw err;
  });
}
