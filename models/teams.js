const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const teamSchema = new mongoose.Schema({
	name: {type: String, require: true},


	points: Number, 
	wins: Number, 
	losses: Number, 

	// KDA
	top: String, 
	jg: String, 
	mid: String, 
	adc: String, 
	support: String, 

	// comp: [[String]], // storing pictures 
	// members: [ {
	// 	type: Schema.Types.ObjectId,
 //   		ref: 'User'
	// } ], 


//	upcomingmatches: [String], // implement in the future


});

								// collection name 
const Teams = mongoose.model('Teams', teamSchema);

module.exports = Teams;