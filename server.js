require('./db/db');

const express = require('express');
const app = express(); 

const bodyParser = require('body-parser'); 
const methodOverride = require('method-override');


const vglController = require('./controllers/vglcontroller'); 


app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/', vglcontroller);

app.listen(3000, () => {
	console.log("Server is listening in port 3000");
});