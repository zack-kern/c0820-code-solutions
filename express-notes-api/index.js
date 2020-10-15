const express = require('express');
const app = express();
const port = 3000;
const data = require('./data.json');
var arr = [];
// app.use(express.json()); //idk if I use this.....
app.get('/api/notes', (req, res) => {
  var theNotes = data.notes;
  if (theNotes.length !== 0) {
    for (var property in theNotes) {
      arr.push(theNotes[property]);
    }
    res.send(arr);
  } else {
    res.send(arr);
  }
});
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
