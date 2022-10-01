const express = require('express');
const app = express();
const path = require('node:path');


const userRoute = require('./Routes/user-route')
//test response for initial functionality.
app.get('/api', (req, res) => {
    res.status(200).send("Hello from the server!");
})

app.use('/api/user')



app.get('/', 
  (err, request, response) => {
    response.status(400).send('Server had a misc middleware error: ' + err)
});

app.listen(3000, () => {
  console.log('Server is Listening on port 3000');
});
