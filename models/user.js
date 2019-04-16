const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({


	username: String, 
	password: String, 

	team: String, 
	role: String,
	favChampion: String, 
	
	isAdmin: {type: Boolean, default: false}, 
	
	//timezone: String, 

	// mon: Number, 
	// tues: Number, // stored as military time, DEFAULT Time in EST
	// wed: Number, 
	// thur: Number, 
	// fri: Number, 
	// sat: Number, 
	// sun: Number


});

const User = mongoose.model('User', userSchema);

module.exports = User;