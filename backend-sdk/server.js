// import files
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
const app = express();
const port = 3001;
import { connect } from './mongo/conn.js';
import router from './routes/auth.js';
// use files  
app.use(bodyParser.json());
app.use(cors());
app.use(require("express-session")({
  secret: "node js mongodb",
  resave: false,
  saveUninitialized: false
  }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// set env port to 3001
app.set('port', process.env.PORT || 3001);

// listen to port 3001
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// connect to mongo
connect(function (err) {
  if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1);
  } 
  else {
    console.log('Connected to Mongo');
  }
});

// use routes
app.use('/auth', router);

// get request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

