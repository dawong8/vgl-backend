require('./db/db');

const express = require('express');
const app = express(); 

const bodyParser = require('body-parser'); 
// const methodOverride = require('method-override');
const cors           = require('cors');
const session        = require('express-session')





const corsOptions = {
  origin: 'http://localhost:3000', 

  credentials: true, // This allows the session cookie to be sent back and forth
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

const vglController = require('./controllers/vglcontroller'); 
const adminController = require('./controllers/admincontroller');
const authController = require('./controllers/authcontroller');
const leagueController = require('./controllers/leaguecontroller');
const eventsController = require('./controllers/eventscontroller');

app.use('/', vglController);
app.use('/api/v1/admin', adminController);
app.use('/api/v1/auth', authController);
app.use('/api/v1/league', leagueController);
app.use('/api/v1/events', eventsController);


app.listen(process.env.PORT || 9000, () => {
	console.log("Server is listening in port 9000");
});