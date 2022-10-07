const express = require('express');
const databaseController = require('../Controllers/database-controller');
const itemController = require('../Controllers/item-controllers');
const userController = require('../Controllers/user-controller');
const router = express.Router();

//JOE: this router works via postman, it's req.body should have name and username
router.post(
  '/create',
  (req, res, next) => {console.log("I'm on Item-router Create"); next();},
  userController.getUserId,
  databaseController.getRecords,
  itemController.createItem,
  databaseController.insertRecord,
  (req, res, next) => {
    //Handle Create Item Response Here
    console.log(`item ${res.locals.result} was created succesfully`);
    res.status(200).send(res.locals.result);
  }
);

// JOE: what does this do?
router.post('/', databaseController.createQueryData, 
userController.getUserId,
databaseController.getRecords,
itemController.getItems, 
// databaseController.getRecords, 
(req, res, next) => {
    //Handle Create Item Response Here
    res.status(200).send(res.locals.response.rows)
    
})


// JOE: HOLY SHIT I'M STARTING TO WRITE CODE FOR A FEATURE THIS FEELS GOOD I LIKE THIS
router.delete('/delete', (req, res, next) => {
  
  res.status(200).send(res.locals.response.rows)
  })



/*

We want tests for:

routes
    do the routes go to the right places
    do we get the responses we expect
  all existing routes
  all new routes (update item, delete item)

queries
    are the queries formatted correctly before sending
    do we get the response we should from the databse 
  all existing queries
  new queries 

controllers

new features
  tests related to map implementation
    storing and querying locations
  new data: user ratings, item ratings, pictures



*/

module.exports = router;
