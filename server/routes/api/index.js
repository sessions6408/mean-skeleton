var express = require('express');
var router = express.Router();

router.all('/*', function(req, res, next) {

	// Router extensions
	res.fail = function(message, status_code) { // Protocol for failing api requests
		status_code = status_code || 400
		res.status(status_code).json({
			success: false,
			message: message
		});
	}

	res.pass = function(data, status_code) { // Protocol for passing api requests
		status_code = status_code || 200
		res.status(status_code).json({
			success: true,
			data: data
		});
	}

	next(); // Continue to next matching route
});

// GET /api
router.get('/', function(req, res) {
	res.pass("Welcome to the API");
});

module.exports = router;