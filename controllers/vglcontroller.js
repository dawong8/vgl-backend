const express = require('express');
const router = express.Router(); 

const Events = require('../models/events');
const Teams = require('../models/teams');

router.get('/', (req, res) => {
	res.render('home.ejs');
});