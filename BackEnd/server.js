//setup stuff
//path setup
const path = require('node:path');
//express stuff
//import express from 'express';            //this doesn't work.
const express = require('express');
const app = express();


//test response for initial functionality. 
app.get('/test', 
  (request, response) => {
    response.status(200).send('Testing Testing, express is functioning. Is nodemon? Yes. ')
});



app.listen(3000, () => {
  console.log('Server is Listening on port 3000');
});
