  var express = require("express");
var app     = express();
var path    = require("path");
var pg = require('pg');
var knex = require('knex');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs')
const { Client } = require('pg');
var db = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'root',
    database : 'facerecognition',
   
  }
});


app.get('/', (req, res) => res.send('Signin'))

app.post('/submit', (req, res) => {
  var a = JSON.parse(req.body);
  console.log(a);
});
   

 

 

app.listen(5000);
console.log("Running at Port 5000");
