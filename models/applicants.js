const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
	ign: String, 
	rank: String, 
	position1: String, 
	position2: String,
	honor: String, 
	partner: String // optional
});

const Applicants = mongoose.model('Applicants', applicantSchema);

module.exports = Applicants;