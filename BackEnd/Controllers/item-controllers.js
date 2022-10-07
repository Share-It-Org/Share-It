const db = require('../Models/database-model');
const getRecordsModel = require('../Models/get-records-model');
const insertRecordsModel = require('../Models/insert-records-model');

const itemController = {};

//middleware for creating an item in the database
itemController.createItem = async (req, res, next) => {
  console.log("req.body: ", req.body);
  console.log(res.locals.response);
  // change user_id to id
  const { _id } = res.locals.response.rows[0];
  // Receive data in request object
  const { name, description, leaseDuration, category, photo } = req.body.createItem;
  // const { username } = req.body.username;
  // create a user variable and set it to the query result of passing in username to users to get user_id
  // const user_id = db.query(`SELECT _id from users ON users.username = ${username}`);
  // create a category variable and set it to the query result of passing in category to categories to get category_id

  // let category_id = await db.query(`SELECT _id from categories WHERE name = '${category}'`);
  // category_id = category_id.rows[0]._id;
  category_id = 1;

  console.log('category_id: ', category_id);
  const query = new insertRecordsModel();
  query.setTableName("items")
  // query.setColumns("name", "description", "status", "photo", "owner", "holder", "lease_duration", "category");
  console.log(query.columns);
  // query.setValues(name, description, "available", photo, _id, _id, leaseDuration, category_id);

  // query.setProps([{"name": name}, {"description": description}, {"status": "available"}, {"photo": photo}, {"owner": _id}, {"holder": _id}, {"lease_duration": leaseDuration}, {"category": category}]);
  query.setProps([["name", name], ["description", description], ["status", "available"], ["photo", photo], ["owner", _id], ["holder", _id], ["lease_duration", leaseDuration], ["category", category_id]]);

  console.log("userController.getUserId");

  req.locals.queryData = query.queryData;
  next();


  // req.locals = {
  //   queryData: {},
  // };

  // console.log(req.locals);
  // req.locals.queryData.tableName = 'items';
  // //When we need to grab description of an item from the front end
  // req.locals.queryData.description = req.body.description;

  // console.log(req.body);
  // return next();
};

itemController.getItems = (req, res, next) => {
    console.log(res.locals.response.rows[0]._id);

    const query = new getRecordsModel();
    query.setTableName("items");
    query.setConditions(`owner_id = ${res.locals.response.rows[0]._id}`)

    req.locals.queryData = query.queryData;
    console.log("HELLO FROM GET ITEMS");
    console.log(req.locals.queryData);
    next();
    // const query = new getRecordsModel();
    // query.setConditions = (`owner = '${}'`)
}

itemController.getItemsAndCategories = (req, res, next) => {
  console.log(res.locals.response.rows[0]._id);

  const query = new getRecordsModel();
  query.setTableName("categories");
  query.setConditions(`item_id = ${res.locals.response.rows[0]._id}`)

  req.locals.queryData = query.queryData;
  console.log("HELLO FROM GET ITEMS AND CATEGORIES");
  console.log(req.locals.queryData);
  next();
  // const query = new getRecordsModel();
  // query.setConditions = (`owner = '${}'`)
}

module.exports = itemController;
