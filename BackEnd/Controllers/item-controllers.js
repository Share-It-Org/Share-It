const express = require('express');
const db = require('../Models/database-model');

const itemController = {};

itemController.createItem = (req, res, next) => {
  req.locals = {
    queryData: {},
  };

  req.locals.queryData.tableName = 'item';
  req.locals.queryData.name = req.body.name;
  //if we need description of an item
//   req.locals.queryData.description = req.body.description;

  console.log(req.body);
  next();
};

itemController.getItems = (req, res, next) => {
    
}

module.exports = itemController;
