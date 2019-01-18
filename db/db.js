const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/vgl';  // change later

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