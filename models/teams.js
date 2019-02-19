const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
	name: {type: String, require: true},
	logo: String, //optional 
	points: Number, 
	wins: Number, 
	losses: Number, 
	top: String, 
	jg: String, 
	mid: String, 
	adc: String, 
	support: String


});

								// collection name 
const Teams = mongoose.model('Teams', teamSchema);

module.exports = Teams;