var express = require('express');
var app = express();

function logger (req, res, next) {
  console.log("== Got a request");
  console.log("  -- URL:", req.url);
  console.log("  -- Method:", req.method);
  next();
}

app.use(logger);

app.get('/hello', function (req, res, next) {
  console.log("== Got a HELLO request");

  var resBody = "<html>";
  resBody += "<body>";
  resBody += "<h1>Hello world!</h1>";
  resBody += "</body>";
  resBody += "</html>";

  res.status(200).send(resBody);
});

app.get('/cats', function (req, res, next) {
  console.log("== Got a CATS request");

  var resBody = "<html>";
  resBody += "<body>";
  resBody += "<h1>Cats!</h1>";
  resBody += "</body>";
  resBody += "</html>";

  res.status(200).send(resBody);
});

app.get('/', function (req, res, next) {
  res.status(200).sendFile(__dirname + '/public/index.html');
});

app.get('/people', function (req, res, next) {
  res.status(200).sendFile(__dirname + '/public/people.html');
});

var availablePeople = [
  'leia',
  'luke',
  'rey',
  'finn',
  'r2d2'
];
app.get('/people/:personName', function (req, res, next) {
  console.log("== req.params:", req.params);
  if (availablePeople.indexOf(req.params.personName) !== -1) {
    res.status(200).sendFile(__dirname + '/public/people/' + req.params.personName + '.html');
  } else {
    next();
  }
});

app.use(express.static('public'));

app.get('*', function (req, res, next) {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

// app.post()
// app.patch()

app.listen(8000, function () {
  console.log("== Server is listening on port 8000");
});
