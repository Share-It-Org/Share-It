const express = require('express');
const db = require('../Models/database-model');
const getRecordsModel = require('../Models/get-records-model')

const itemController = {};

//middleware for creating an item in the database
itemController.createItem = (req, res, next) => {
  req.locals = {
    queryData: {},
  };

  console.log(req.locals);
  req.locals.queryData.tableName = 'items';
  req.locals.queryData.name = req.body.name;
  //When we need to grab description of an item from the front end
  req.locals.queryData.description = req.body.description;

  console.log(req.body);
  return next();
};

itemController.getItems = (req, res, next) => {
    console.log(res.locals.response.rows[0]._id);

    const query = new getRecordsModel();
    query.setTableName("items");
    query.setConditions(`owner = ${res.locals.response.rows[0]._id}`)

    req.locals.queryData = query.queryData;
    console.log("HELLO");
    console.log(req.locals.queryData);
    next();
    // const query = new getRecordsModel();
    // query.setConditions = (`owner = '${}'`)
}

module.exports = itemController;
