const express = require('express');
const router = express.Router(); 

//const Events = require('../models/events');
const Teams = require('../models/teams');
const Applicants = require('../models/applicants');



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


router.get('/success', (req, res) => {
	res.render('success.ejs');
})

router.get('/signup', (req, res) => {
	res.render('signup.ejs');
});

router.post('/', (req, res) => {
	Applicants.create(req.body, (err, createdApplicant) => {
		if (err) {
			res.respond(err); 
		} else {
			res.redirect('/success');
		}
	})
});

module.exports = router;// super important!!!! do not forget this line of code