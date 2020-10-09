/* eslint-disable no-console */
const fs = require('fs');
var myFile = process.argv[2];
fs.readFile(myFile, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
