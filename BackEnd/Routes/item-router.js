const express = require('express');
const itemController = require('../Controllers/item-controllers');
const router = express.Router();

router.post('/create', itemController.createItem, (req, res, next) => {
    //Handle Create Item Response Here
    res.status(418).send("Not Yet Implemented");
})

router.get('/get', itemController.getItems, (req, res, next) => {
    //Handle Create Item Response Here
    res.status(418).send("Not Yet Implemented");
})

module.exports = router;