/* eslint-disable no-console */
const dataJ = require('./data.json');
const fs = require('fs');
if (process.argv[2] === 'read') {
  const parseStuff = dataJ.notes;
  for (const property in parseStuff) {
    console.log(`${property}: ${parseStuff[property]}`);
  }
} else if (process.argv[2] === 'create') {
  const parseStuff = dataJ.notes;
  parseStuff[dataJ.nextId] = process.argv[3];
  dataJ.nextId++;
  var finalWrite = JSON.stringify(dataJ, null, 2);
  fs.writeFile('data.json', finalWrite, err => {
    if (err) throw err;
  });
} else if (process.argv[2] === 'delete') {
  var deleteKey = process.argv[3].toString();
  delete dataJ.notes[deleteKey];
  fs.writeFile('data.json', finalWrite, err => {
    if (err) throw err;
  });
} else if (process.argv[2] === 'update') {
  dataJ.notes[process.argv[3]] = process.argv[4];
  fs.writeFile('data.json', finalWrite, err => {
    if (err) throw err;
  });
}
