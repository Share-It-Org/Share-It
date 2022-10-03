const express = require('express');
const db = require('../Models/database-model')
// setting up bcrypt stuff
const bcrypt = require('bcrypt');
const saltFactor = 10; 


const userController = {};

userController.createUser = (req, res, next) => {
    req.locals = {
        queryData: {},
    };
    
    req.locals.queryData.tableName = 'users';
    req.locals.queryData.username = req.body.username;

    // req.locals.queryData.password = req.body.password;
    bcrypt.hash(req.body.password, saltFactor, function(error, hash) {
        req.locals.queryData.password = hash;
      })

    console.log(req.body);
    console.log(req.locals);
    //TODO: Add Error Handling

    next();
}

// this middleware should be chained AFTER database-controller-get user middleware
// expects the hashed password retrieved from database to be stored in req.locals.hashedPassword 
userController.loginUser = (req, res, next) => {
  // get username and password from request body
  const username = req.body.username;
  const password = req.body.password;

  const hashedPassword = req.locals.hashedPassword;
  bcrypt.compare(password, hashedPassword, function (error, result) {
    if (result) {
      console.log('its a match!')
      return next();
    }
    return next({error})
  });

};


module.exports = userController;
