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

    if(!req.locals || !req.locals.queryData) throw new Error("databaseController.insertRecord: Did not include queryData in req.locals.")
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

databaseController.getRecords = async(req, res, next) => {
<<<<<<< Updated upstream
    let query = `SELECT`

    (req.locals.queryData)

=======
    let query = `SELECT `

    if(!req.locals || !req.locals.queryData) throw new Error("databaseController.getRecords: Did not include queryData in req.locals.")

    const queryData = Object.entries(req.locals.queryData);
    const dataTypes = [];

    console.log(queryData);

    queryData.forEach(element => {
        dataTypes.push(element[0]);
    })

    const attributesArray = dataTypes.includes("attributes") ? queryData[dataTypes.indexOf("attributes")].slice(1)[0] : undefined;
    console.log(attributesArray);

    const conditionsArray = dataTypes.includes("conditions") ? queryData[dataTypes.indexOf("conditions")].slice(1)[0] : undefined;
    console.log(conditionsArray);

    query = query.concat(
        ( attributesArray ? attributesArray.toString() : '*' ),
        ' FROM ', 
        req.locals.queryData.tableName,
    )

    if (conditionsArray) {
        query += ' WHERE ';
        conditionsArray.forEach(element => query += `${element} AND`)
    }
    query = query.slice(0,-4);
    query += ';';
    const response = await db.query(query);
        console.log(response);
        res.locals.response = response;
>>>>>>> Stashed changes
}

module.exports = databaseController;