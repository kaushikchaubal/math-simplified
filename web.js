var gzippo = require('gzippo');
var express = require('express');
var mongoose = require('mongoose');
var learnController = require('./server/controllers/learnController');

// Start app as an express-app on a particular port
var app = express();
var port = process.env.PORT || 5000;
app.listen(port);
console.log('Listening at port %d', port);

// Setup the satic content using gzippo
app.use(gzippo.staticGzip("" + __dirname));

// Connect to MongoDB remotely
mongoose.connect('mongodb://math-admin:math-admin@ds043210.mongolab.com:43210/heroku_app32851124');

// Expose APIs
app.get('/api/getCourseList', learnController.courseList);

