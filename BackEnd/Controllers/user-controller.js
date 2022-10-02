const express = require('express');
const db = require('../Models/database-model')

const userController = {};

userController.createUser = (req, res, next) => {
    req.locals = {
        queryData: {},
    };
    
    req.locals.queryData.tableName = 'test3';
    req.locals.queryData.username = req.body.username;
    req.locals.queryData.password = req.body.password;

    console.log(req.body);
    console.log(req.locals);
    //TODO: Add Error Handling

    next();
}
module.exports = userController;
