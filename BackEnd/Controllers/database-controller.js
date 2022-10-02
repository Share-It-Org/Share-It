const db = require('../Models/database-model');

const databaseController = {};

databaseController.insertRecord = async (req, res, next) => {
    console.log('Insert Records Query Data');
    console.log(req.locals.queryData);
    let query = `INSERT INTO ${req.locals.queryData.tableName} `

    let columns = `(`;
    let values = `(`;

    for(const key in req.locals.queryData) {
        if(key === 'tableName') continue;
        columns += key + ',';
        if(typeof req.locals.queryData[key] === 'string') {
            values = values.concat(`'`, req.locals.queryData[key], `',`);
        } else {
            values += req.locals.queryData[key] + ',';
        }
    }
    columns = columns.slice(0, -1);
    values = values.slice(0, -1);

    columns += ')';
    values += ')';

    query = query.concat(columns, ' VALUES ', values, ';');
    
    try {
        const result = await db.query(query);
        res.locals.result = result;
        next();
    }
    catch (err) {
        next("databaseController.insertRecord: Insert Failed. Did Columns match the table's columns? ERROR: " + err)
    }
}

module.exports = databaseController;