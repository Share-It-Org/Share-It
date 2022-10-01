const express = require('express');

const router = express.Router();

router.post('/create', userController.createUser, (req, res, next) => {
    console.log(`user ${res.locals.userName} was created succesfully`);
    res.sendStatus(200);
})

module.exports = router;