const express = require('express');
const db = require('../Models/database-model')

const userController = {};

userController.createUser = (req, res, next) => {
  // get username and password from request body 
  const username = req.body.username;
  const password = req.body.password; 

req.locals = {
    queryData: {},
};

req.locals.queryData.tableName = 'users';
req.locals.queryData.username = req.body.password;

  //TODO: Add Error Handling

  next();
}


userController.loginUser = (req, res, next) => {
  // get username and password from request body 
  const username = req.body.username;
  const password = req.body.password; 

  // need more info on our SQL database for this
  const query = ' ';

  db.query(query)
    .then((data => {
      // expecting data to be the matching password 
      if (data === password ) {
        res.locals.loginStatus = true;
        return next();
      }
    }))
    .catch((error) => {
      console.log(error);
      // content inside object depends on the format of our global error handler 
      next({})
    })
}

module.exports = userController;
