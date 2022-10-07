const express = require('express');
const app = express();
const path = require('node:path');

//importing controllers     
const userRoute = require('./Routes/user-route');
const itemRoute = require('./Routes/item-router');

app.use(express.json());

// handle sign up and login functionalities 
app.use('/api/user/items', itemRoute);
app.use('/api/user', userRoute);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

app.use((error, req, res, next) => {
    const defaultErr = {
        log: "Express error handler caught unknown middleware error",
        status: 400,
        message: { err: "An error occurred" },
    };
    console.log(error);
    const errorObj = Object.assign(defaultErr, error);
    console.log("error log " + errorObj.log)
    res.locals.message = errorObj.message;
    return res.status(errorObj.status).send(eval(errorObj.message));
    // return res.status(errorObj.status).send(res.locals.message);
});

// app.get('/', 
//   (err, request, response) => {
//     response.status(400).send('Server had a misc middleware error: ' + err)
// });

app.listen(3000, () => {
  console.log('Server is Listening on port 3000');
});