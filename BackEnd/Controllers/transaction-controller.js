const db = require('../Models/database-model');
const getRecordsModel = require('../Models/get-records-model')

const transactionController = {};

//middleware for creating an item in the database
transactionController.createTransaction = (req, res, next) => {
  req.locals = {
    queryData: {},
  };

  console.log(req.locals);
  req.locals.queryData.tableName = 'transactions';
  //When we need to grab description of an item from the front end
  req.locals.queryData.description = req.body.description;

  console.log(req.body);
  return next();
};

transactionController.getTransaction = (req, res, next) => {
    console.log(res.locals.response.rows[0]._id);

    const query = new getRecordsModel();
    query.setTableName("transactions");
    query.setConditions(`sharer_id = ${res.locals.response.rows[0]._id}`)

    req.locals.queryData = query.queryData;
    console.log("HELLO FROM GET TRANSACTION");
    console.log(req.locals.queryData);
    next();
    // const query = new getRecordsModel();
    // query.setConditions = (`owner = '${}'`)
}


module.exports = itemController;