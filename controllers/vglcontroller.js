const express = require('express');
const router = express.Router(); 

//const Events = require('../models/events');
const Teams = require('../models/teams');



router.get('/', (req, res) => {
	res.render('home.ejs');
});

router.get('/schedule', (req, res) => {
	res.render('calendar.ejs');
});


router.get('/stats', (req, res) => {
	Teams.find({}, (err, all) => {
		if (err) {
			res.respond(err);
		} else {
			res.render('stats.ejs', {
				allTeams: all
			});
		}
	})
});



module.exports = router;// super important!!!! do not forget this line of code