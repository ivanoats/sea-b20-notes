'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var passport = require('passport');
var app = express();
var jwtauth = require('./lib/jwtauth')(app);

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/notes-development');

app.use(express.static(__dirname + (process.env.STATIC_DIR || '/build')));

app.set('jwtSecret', process.env.JWT_SECRET || '327e5ded3c82e9fbdd10a80595d8713c093746be3a2662eb1588bd0746a571fe148c731f04c81cc9bc94096d1c31ed7b');
app.set('secret', process.env.SECRET || 'f3d52544d4064f6da21e3e181b59a9500b21ef15440298a0d3845213e1b725fcc56346fd1a66c36bed762ff74420a4da');

app.use(passport.initialize());

require('./lib/passport')(passport);

app.use(bodyparser.json());
require('./routes/note-routes')(app, passport, jwtauth.auth);
require('./routes/user-routes')(app, passport);
var server = http.createServer(app);

server.listen(process.env.PORT || 3000, function() {
  console.log('server running on port 3000');
});
