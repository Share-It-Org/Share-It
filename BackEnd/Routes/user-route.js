const express = require('express');
const databaseController = require('../Controllers/database-controller');
const userController = require('../Controllers/user-controller');

const router = express.Router();

router.post('/create', userController.createUser, databaseController.insertRecord, (req, res, next) => {
    console.log(`user ${res.locals.result} was created succesfully`);
    res.sendStatus(200);
})

router.post('/login', (request, response) => {

    response.status(200).send('testing login function')
  });

router.post('/signup', )

module.exports = router;