const { Pool } = require('pg');

const PG_URI = 
'postgres://ygllxhor:aZ4JUTsTGM9OXz8MPBV8uVspNBab-JEa@lucky.db.elephantsql.com/ygllxhor'
  
// old team's db for reference?
// 'postgres://biqavmuq:QmD88bqMD6iKIuNNbsjaqIzcm4Amp7Y8@heffalump.db.elephantsql.com/biqavmuq';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('SQL Query Executed:', text);
    console.log("text: ", text);
    console.log("params: ", params);
    console.log("callback: ", callback);
    return pool.query(text, params, callback);
  },
};
