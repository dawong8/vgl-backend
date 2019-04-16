const express = require('express');

const router = express.Router();
const Teams = require('../models/teams.js');

const request = require('request');

router.get('/:id', (req, res) => {
	request(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.id}?api_key=RGAPI-7414c4a4-1a6d-4325-95e5-6d5f7c359383`, {json: true}, (err, response, body) => {
		res.json({
			info: body
		})
	});

		
});


router.get('/mastery/:id', (req, res) => {
	request(`https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${req.params.id}?api_key=RGAPI-7414c4a4-1a6d-4325-95e5-6d5f7c359383`, {json: true}, (err, response, body) => {
		res.json({
			info: body
		})
	});

		
});

module.exports = router; 
