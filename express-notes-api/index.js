const express = require('express');
const app = express();
const port = 3000;
const data = require('./data.json');
var arr = [];
// app.use(express.json()); //idk if I use this.....

// Clients can GET a list of notes
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

// Clients can GET a single note by id.
app.get('/api/notes/:id', (req, res) => {
  var parsedID = parseInt(req.params.id);
  var theNotes = data.notes;
  if (Math.sign(parsedID) === 0 || Math.sign(parsedID) === -1 || isNaN(parsedID)) {
    res.status(400).send('Fix ya number pal');
  } else if (req.params.id in theNotes) {
    res.status(200).send(theNotes[parsedID]);
  } else {
    var err = { error: 'the selected index cannot be found.' };
    res.status(404).send(err);
  }
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
