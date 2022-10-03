const express = require('express');
const app = express();
const path = require('node:path');

//importing controllers 
//const userController = require('./Controllers/user-controller')      
const userRoute = require('./Routes/user-route')

app.use(express.json());

//commenting out, we are using a router for users, not a controller here. 
// app.post('/login', userController,
//   (request, response) => {
//     response.status(200).send('testing login function')
//   })

app.get('/api', (req, res) => {
    res.status(200).send("Hello from the server!");
})

// handle sign up and login functionalities 
app.use('/api/user', userRoute)

//test response for initial functionality.
app.get('/test', (request, response) => {
  response
    .status(200)
    .send('Testing Testing, express is functioning. Is nodemon? Yes. ');
});

app.get('/', 
  (err, request, response) => {
    response.status(400).send('Server had a misc middleware error: ' + err)
});

app.listen(3000, () => {
  console.log('Server is Listening on port 3000');
});