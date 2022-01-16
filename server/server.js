require('dotenv').config();
const express = require('express');
const db = require('./db');
const morgan = require('morgan');

const app = express();



//middleware 
app.use(express.json());



// Routes
app.get('/*', (req, res) => {
    console.log(' server just got hit');
    res.send('<h1>*******The Server is here to SERVE*******</h1>')
});






//Server Setup for port 3001

const port = process.env.PORT || 3001;
app.listen(port,() => {
    console.log(`Hey there! the Server is up and running on port ${port}`);
});