const { response } = require('express');
const express = require('express');
const databaseController = require('../Controllers/database-controller');
const userController = require('../Controllers/user-controller');
const locationController = require('../Controllers/location-controller');

const router = express.Router();

router.post('/create', locationController.geoCode, userController.createUser, databaseController.insertRecord, (req, res, next) => {
    console.log(`user ${res.locals.result} was created succesfully`);
    res.sendStatus(200).send('create user function');
})

router.post('/login', userController.loginUserBefore, databaseController.getRecords, userController.loginUserAfter, (request, response) => {
    response.status(200).send('testing login function');
  });

  // this route doesn't seem to be used
router.post('/signup', userController.createUser, databaseController.insertRecord, (req, res) => {
  response.status(200).send("Created user!");
})

router.post('/address', 
locationController.geoCode,
userController.createAddress,
databaseController.insertRecord,


(req, res, next) => {
  response.status(200).send("added address!");
})

module.exports = router;