// import files
// const express = require('express');
import express from 'express';
// const bodyParser = require('body-parser');
import bodyParser from 'body-parser';
// const cors = require('cors');
import cors from 'cors';

const app = express();
const port = 3001;
import { connect } from './mongo/conn.js';

// use files  
app.use(bodyParser.json());
app.use(cors());

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

// get request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

