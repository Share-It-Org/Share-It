const { Pool } = require('pg');

const PG_URI =
  'postgres://biqavmuq:QmD88bqMD6iKIuNNbsjaqIzcm4Amp7Y8@heffalump.db.elephantsql.com/biqavmuq';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callbacks) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
