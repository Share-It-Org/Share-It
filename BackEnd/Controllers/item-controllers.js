const express = require('express');
const db = require('../Models/database-model');

const itemController = {};

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

itemController.getItems = (req, res, next) => {};

module.exports = itemController;
