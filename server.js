var express = require('express');
var app = express();

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

// app.post()
// app.patch()

app.listen(8000, function () {
  console.log("== Server is listening on port 8000");
});
