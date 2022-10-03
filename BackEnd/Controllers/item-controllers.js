const express = require('express');
const db = require('../Models/database-model');

const itemController = {};

itemController.createItem = (req, res, next) => {
  req.locals = {
    queryData: {},
  };

  req.locals.queryData.tableName = 'item';
  req.locals.queryData.name = req.body.name;

  next();
};

module.exports = itemController;
