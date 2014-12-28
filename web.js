var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();
 
app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname));

app.get('/api/getCourseList', function (req, res) {
	var courseList = [{
      name: 'Basic Arthimatic',
      description: "This course goes through the basic concepts of arthimatic",
      topics: "addition, subtraction, multiplication, division",
      level: "Basic",
      url: "#/arthimatic",
      reviews: [{
        stars: 5,
        body: "I love this course!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 2,
        body: "This course was too basic",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Quadratic Equations',
      description: "Equations can be fun to solve - lets do some fun euqations!",
      topics: "Everything you want about equations!",
      level: "Intermediate",
      url: "#/construction",
      reviews: [{
        stars: 3,
        body: "I think this course was just OK, could honestly use more hands-on experience",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "This course was PERFECT for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Trignometry',
      description: "This topic covers the fundmantels of Trignometry",
      topics: "Some triangles related thing!",
      level: "Advanced",
      url: "#/construction",
      reviews: [{
        stars: 1,
        body: "This course is WAY too in-depth for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Oh my! I love fund management after this!",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 5,
        body: "This feels like the course I always was looking for",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }];
  res.send(courseList);
})

var port = process.env.PORT || 5000;
app.listen(port);
console.log('Listening at port %d', port);