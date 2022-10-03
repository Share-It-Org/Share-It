const express = require('express');
const db = require('../Models/database-model')
// setting up bcrypt stuff
const bcrypt = require('bcrypt');
const getRecordsModel = require('../Models/get-records-model');
const dbController = require('../Controllers/database-controller');
const saltFactor = 10; 


const userController = {};

userController.createUser = (req, res, next) => {
    req.locals = {
        queryData: {},
    };
    
    // req.locals.queryData.password = req.body.password;
    bcrypt.hash(req.body.password, saltFactor, function(error, hash) {
        req.locals.queryData.tableName = 'users';
        req.locals.queryData.username = req.body.username;
        req.locals.queryData.password = hash;
        return next();
        // console.log('inside userController.createUser')
        // console.log(req.body);
        // console.log(req.locals.queryData);
      })
    //TODO: Add Error Handling
}

// this middleware should be BEFORE database-controller getRecords
userController.loginUserBefore = (req, res, next) => {
  console.log("Trying to Login");
  console.log("inside userController.loginUserBefore: ", req.body);
  req.locals = {
    queryData: {},
  };

  const username = req.body.username;
  const password = req.body.password;
  req.locals.queryData.tableName = "users";
  req.locals.queryData.attributes = ['username', 'password'];
  req.locals.queryData.conditions = [`username = '${username}'`];
  return next();
};

// this middleware should be chained AFTER ddatabase-controller getRecords
// expects the hashed password retrieved from database to be stored in req.locals.hashedPassword 
userController.loginUserAfter = (req, res, next) => {
  console.log('inside userController.loginUserAfter: ')
  // get username and password from request body
  const username = req.body.username;
  const password = req.body.password;

  const hashedPassword = res.locals.response.rows[0].password;
  bcrypt.compare(password, hashedPassword, function (error, result) {
    if (result) {
      console.log('its a match!')
      return next();
    }
    console.log('password did not match')
    return next({error})
  });
};

userController.getUserId = async (req, res, next) => {
  const query = new getRecordsModel();
  query.setTableName("users");
  query.setAttributes("id");
  query.setConditions(`username = '${req.body.username}'`)

  console.log("userController.getUserId");

  req.locals.queryData = query.queryData;
  next();
}


module.exports = userController;
