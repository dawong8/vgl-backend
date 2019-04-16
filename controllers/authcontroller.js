const express = require('express');
const router  = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");





router.get('/',  async (req, res) => {
	const foundUser = await User.findOne({username: req.session.username});
	res.json({
		user: foundUser
	});
});

// register : 
router.post('/', async (req, res) => {
	console.log('req.body.why', req.body.password)

	
  try {
  	const password = req.body.password;
	const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
	const userDbEntry = {};
	userDbEntry.username = req.body.username;
	userDbEntry.password = hashedPassword;

	if (req.body.username == 'daddyvan') {
		userDbEntry.isAdmin = true;

	}

    const user = await User.create(userDbEntry);
    console.log("Posted user: ", user);

    req.session.logged = true;
    req.session.username = req.body.username;
    req.session.userId = user._id;



    res.json({
      status: 200,
      data: 'register successful',
      userId: user._id
    });



  } catch(err){
    console.log(err);
    res.send(err);
  }
});


router.post('/login', async (req, res) => {

	try {
		console.log("Req body", req.body.username);
		const foundUser = await User.findOne({username: req.body.username});
		if(foundUser) {
			if (bcrypt.compareSync(req.body.password, foundUser.password)) {
				// console.log("Req body", req.body);
				req.session.message = '';
				req.session.username = foundUser.username;
				req.session.logged = true;
				req.session.userId = foundUser._id;


			    res.json({
			      status: 200,
			      data: 'login successful', 

			      userId: foundUser._id, 
			      isAdmin: foundUser.isAdmin
			    });

			    console.log('login in auth route: session.userid', req.session.userId);
				//successful login

			}else {
				//Add an ALERT?
				req.session.message = 'Username or password are incorrect';

			    res.json({
			      status: 401,
			      data: 'login unsuccessful'
			    });
			}
		}else {
			//Add an ALERT?
			req.session.message = 'Username or password are incorrect';
		    res.json({
		      status: 401,
		      data: 'login unsuccessful'
		    });
		}


	} catch (err) {
		res.send(err);
	}
	

});

router.get('/logout', (req, res) => {
	console.log("Logout req session: ",req.session);
  req.session.destroy((err) => {
    if(err){
      res.send(err);
    }else {
    	res.json({
    		status: 200, 
    		data: 'logout successful'
    	});
    }
  });
});





module.exports = router; 