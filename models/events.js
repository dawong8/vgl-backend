const mongoose = require('mongoose'); 

const eventSchema = new mongoose.Schema({
	title: String, 
	start: Date, 
	end: Date, 



});

const Events = mongoose.model('Events', eventSchema); 

module.exports = Events; 