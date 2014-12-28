var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();
learnController = require('./server/controllers/learnController');

mongoose          = require('mongoose'),
mongoose.connect('mongodb://math-admin:math-admin@ds043210.mongolab.com:43210/heroku_app32851124');
 
app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname));

app.get('/api/getCourseList', learnController.courseList);

var port = process.env.PORT || 5000;
app.listen(port);
console.log('Listening at port %d', port);