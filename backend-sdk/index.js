// import files
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
// "mongodb+srv://suvan:<password>@cluster0.ldaw2fl.mongodb.net/?retryWrites=true&w=majority"
// use files
app.use(bodyParser.json());
app.use(cors());

// set env port to 3001
app.set('port', process.env.PORT || 3001);

// listen to port 3001
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



// get request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

