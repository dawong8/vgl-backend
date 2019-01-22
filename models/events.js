const mongoose = require('mongoose'); 

const eventSchema = new mongoose.Schema({
	time: String, //"9pm EST"
	date: String, // "Jan 25th"
	teams: String // "Team 1 vs 2"
});

const Events = mongoose.model('Events', eventSchema); 

module.exports = Events; 