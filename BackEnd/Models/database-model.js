const { Pool } = require('pg');

const PG_URI = process.env.PG_URI;

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
