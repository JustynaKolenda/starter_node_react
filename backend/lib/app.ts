import express = require('express');
import bodyParser = require("body-parser");
import helmet = require('helmet')


// Create a new express application instance
const app: express.Application = express();
const { check } = require('express-validator');

app.use(helmet())
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');

  next();
});

 app.use(express.json());
 
app.listen(8000, function () { 
   console.log('Example app listening on port 8000!');
});