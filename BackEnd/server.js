//setup stuff
//path setup
const path = require('node:path');
//express stuff
//import express from 'express';            //this doesn't work. Why?
const express = require('express');
const app = express();

//importing controllers 
const userController = require('./userController')      

//test response for initial functionality. 
app.get('/test', 
  (request, response) => {
    response.status(200).send('Testing Testing, express is functioning. Is nodemon? Yes. ')
});

app.post('/login', userController,
  (request, response) => {
    response.status(200).send('testing login function')
  })

app.listen(3000, () => {
  console.log('Server is Listening on port 3000');
});
