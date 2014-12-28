	var Courses = require('../models/courses.js');

	module.exports.courseList = function(req, res) {
	    Courses.find({}, function(err, results) {
	        res.json(results);
	    });
	}