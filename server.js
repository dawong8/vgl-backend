require('./db/db');

const express = require('express');
const app = express(); 

const bodyParser = require('body-parser'); 
const methodOverride = require('method-override');


const vglController = require('./controllers/vglcontroller'); 
const adminController = require('./controllers/admincontroller');


app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


app.use('/', vglController);
app.use('/admin', adminController);


app.listen(3000, () => {
	console.log("Server is listening in port 3000");
});