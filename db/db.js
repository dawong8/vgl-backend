const mongoose = require('mongoose');

const connectionString = 'mongodb://heroku_hnz3x667:6vscg15r88hpmmcu1t2imffgph@ds163354.mlab.com:63354/heroku_hnz3x667';  // change later

mongoose.connect(connectionString, {
	useNewUrlParser: true, 
	useCreateIndex: true, 
	useFindAndModify: false
});

mongoose.connection.on('connected', () => {
	console.log('This is connected');
});

mongoose.connection.on('error', (err) => {
	console.log('This is error: ' + err);
});

mongoose.connection.on('disconnected', () => {
	console.log('This is disconnected');
});