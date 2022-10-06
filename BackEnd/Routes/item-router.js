const express = require('express');
const databaseController = require('../Controllers/database-controller');
const itemController = require('../Controllers/item-controllers');
const userController = require('../Controllers/user-controller');
const router = express.Router();

router.post(
  '/create',
  itemController.createItem,
  databaseController.insertRecord,
  (req, res, next) => {
    //Handle Create Item Response Here
    console.log(`item ${res.locals.result} was created succesfully`);
    res.status(200).send(res.locals.result);
  }
);

router.post('/', databaseController.createQueryData, 
userController.getUserId, 
databaseController.getRecords,
itemController.getItems, 
databaseController.getRecords, 
(req, res, next) => {
    //Handle Create Item Response Here
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
