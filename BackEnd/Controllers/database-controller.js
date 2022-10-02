const db = require('../Models/database-model');

const databaseController = {};

databaseController.insertRecord = async (req, res, next) => {
/*
EXPECTED DATA FORMAT for Req.locals.queryData:
{
    [column1Name]: [value],
    [column2Name]: [value],
    etc...
}
*/

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