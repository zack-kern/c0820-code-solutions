var express = require('express');
var app = express();
var options = { root: __dirname };

app.use((req, res, next) => {
  switch (req.originalUrl) {
    case '/index.html':
      res.sendFile('./index.html', options);
      res.sendStatus(200);
      break;
    case '/main.js':
      res.sendFile('./main.js', options);
      res.sendStatus(200);
      break;
    case '/styles.css':
      res.sendFile('./styles.css', options);
      res.sendStatus(200);
      break;
    default:
      res.sendStatus(404);
      break;
  }
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port #3k!');
});
