// THINK, I DONT REALLY NEED THIS PAGE 






const express = require('express');
const router = express.Router(); 

//const Events = require('../models/events');
const Teams = require('../models/teams');
const Applicants = require('../models/applicants');
const Users = require('../models/user');




router.get('/stats', (req, res) => {
	Teams.find({}, (err, all) => {
		if (err) {
			res.respond(err);
		} else {
			res.json({
				allTeams: all
			});
		}
	})
});

router.get('/users', (req, res) => {
	Users.find({}, (err, all) => {
		if (err) {
			res.respond(err);
		} else {
			res.json({
				allUsers: all
			});
		}
	})
});

router.get('/:id', async (req, res) => {
	try {
		const foundTeam = await Teams.findById(req.params.id); 
		res.json({
			found: foundTeam
		});
	} catch (err) {
		res.send(err);
	}
});


router.get('/users/:id', async (req, res) => {
	try {
		const foundUser = await Users.findById(req.params.id); 
		res.json({
			found: foundUser
		});
	} catch (err) {
		res.send(err);
	}
});



// router.post('/', (req, res) => {
// 	Applicants.create(req.body, (err, createdApplicant) => {
// 		if (err) {
// 			res.respond(err); 
// 		} else {
// 			res.redirect('/success');
// 		}
// 	})
// });

module.exports = router;// super important!!!! do not forget this line of code