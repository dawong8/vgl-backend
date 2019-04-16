const express = require('express');

const router = express.Router();

//const Events = require('../models/events');
const Teams = require('../models/teams');
const Applicants = require('../models/applicants');

let access = false;

router.get('/', (req, res) => {

	res.render('admin.ejs');
});

router.post('/', (req, res) => {
	if(req.body.password == "table") {
		access = true;
		res.redirect('/admin/secret');

	} else {
		res.redirect('/admin');
	}

});

router.get('/secret', async (req, res) => {

	try {

		const [foundTeam, allApplicants] = await Promise.all([Teams.find({}), Applicants.find({})]);

		res.render('edit.ejs', {
			allTeams: foundTeam, 
			applicants: allApplicants
		})

	} catch (err) {
		res.send(err);
	}




});


 // CREATE 
router.post('/secret', (req, res) => {
	Teams.create(req.body, (err, createdTeam) => {
		if (err) {
			res.send(err);
		} else {
			res.json({
		    	created: createdTeam
		    });
		}
	    
	});

});



//EDIT 
router.put('/secret/:id', (req, res) => {
	Teams.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, thatTeam) => {
		if (err) {
			res.respond(err);
		} else {
			res.json({
				team: thatTeam
			})
		}
	});
});



// find by id 

router.get('/secret/:id/update', (req, res) => {
	Teams.findById(req.params.id, (err, thatTeam) => {
		if(err) {
			res.respond(err);
		} else {
			res.json({
				team: thatTeam
			});
		}
	});
});


//delete 
router.delete('/secret/:id', (req, res) => {
	Teams.findOneAndRemove({"_id": req.params.id}, (err, thatTeam) => {
		if(err) {
			res.respond(err);
		} else {
			res.json({
				status: 'success', 
				deleted: 'thatTeam'
			})
		}
	});
});






module.exports = router;