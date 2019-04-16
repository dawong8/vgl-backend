const express = require('express');

const router = express.Router();

const Events = require('../models/events.js');



router.get('/', (req, res) => {
	Events.find({}, (err, allEvents) => {
		if(err) {
			res.respond(err); 
		} else {
			res.json({
				events: allEvents
			})
		}
	})
});

router.post('/', (req, res) => {
	Events.create(req.body, (err, createdEvent) => {
		if (err) {
			res.respond(err); 
		} else {
			res.json({
				created: createdEvent
			});
		}
	});
});

router.delete('/:id', (req, res) => {
	Events.findOneAndRemove({"_id": req.params.id}, (err, thatEvent) => {
		if(err) {
			res.respond(err);
		} else {
			res.json({
				status: 'success', 
				deleted: 'thatEvent'
			})
		}
	});
});



module.exports = router;