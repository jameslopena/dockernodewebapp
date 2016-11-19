'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  var os = require("os");
  var hostname = os.hostname();
  res.send('Hello world!\r Running on Machine: ' + hostname);

});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
