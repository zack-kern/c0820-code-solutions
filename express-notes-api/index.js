const express = require('express');
const app = express();
const port = 3000;
const data = require('./data.json');
app.use(express.json());

// Clients can GET a list of notes
app.get('/api/notes', (req, res) => {
  var arr = [];
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
    var resp = { error: 'Fix ya number pal!' };
    res.status(400).json(resp);
  } else if (req.params.id in theNotes) {
    res.status(200).send(theNotes[parsedID]);
  } else {
    var err = { error: 'the selected index cannot be found.' };
    res.status(404).send(err);
  }
});

// Clients can POST a new note.
app.post('/api/notes', (req, res) => {
  // eslint-disable-next-line no-console
  const fs = require('fs');
  var bod = req.body;
  var id = data.nextId;
  var theNotes = data.notes;
  if (Object.keys(bod).includes('content')) {
    var pushedObj = { id: data.nextId, content: bod.content };
    theNotes[id] = pushedObj;
    data.notes = theNotes;
    data.nextId++;
    const myData = data;
    fs.writeFile('./data.json', JSON.stringify(myData, null, 2), 'utf-8', err => {
      if (err) {
        var errOb = { error: 'Unexpectedly failed....' };
        res.status(500).send(errOb);
      } else {
        res.status(201).send({ content: bod.content, id: id });
      }
    });
  } else {
    res.status(400).send({ error: "request body must have a 'content' property." });
  }
});

// Clients can DELETE a note by id.
app.delete('/api/notes/:id', (req, res) => {
  const fs = require('fs');
  var parsedID = parseInt(req.params.id);
  var theNotes = data.notes;
  if (Math.sign(parsedID) === 0 || Math.sign(parsedID) === -1 || isNaN(parsedID)) {
    var resp = { error: 'Fix ya number pal!' };
    res.status(400).json(resp);
  } else if (req.params.id in theNotes) {
    delete theNotes[parsedID];
  } else {
    var err = { error: 'the selected index cannot be found.' };
    res.status(404).send(err);
  }
  data.notes = theNotes;
  const myData = data;
  fs.writeFile('./data.json', JSON.stringify(myData, null, 2), 'utf-8', err => {
    if (err) {
      var errOb = { error: 'Unexpectedly failed....' };
      res.status(500).send(errOb);
    } else {
      res.status(204).send('');
    }
  });
});

// Clients can replace a note(PUT) by id.
app.post('/api/notes/:id', (req, res) => {
  const fs = require('fs');
  var parsedID = parseInt(req.params.id);
  var theNotes = data.notes;
  if (Math.sign(parsedID) === 0 || Math.sign(parsedID) === -1 || isNaN(parsedID)) {
    var resp = { error: 'Fix ya number pal!' };
    res.status(400).json(resp);
  } else if (req.params.id in theNotes) {
    var pushedObj = { id: parsedID, content: req.body.content };
    theNotes[req.params.id] = pushedObj;
    data.notes = theNotes;
    var myData = data;
  } else {
    var err = { error: 'the selected index cannot be found.' };
    res.status(404).send(err);
  }
  fs.writeFile('./data.json', JSON.stringify(myData, null, 2), 'utf-8', err => {
    if (err) {
      var errOb = { error: 'Unexpectedly failed....' };
      res.status(500).send(errOb);
    } else {
      res.status(201).send({ content: req.body.content, id: parsedID });
    }
  });
});
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
