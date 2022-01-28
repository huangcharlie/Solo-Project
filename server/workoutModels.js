const { Pool } = require('pg');

const PG_URI = 'postgres://czhamttt:OG9fgk1OZx8U3RYFB4MvOKPvkxmAo3_a@kashin.db.elephantsql.com/czhamttt';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query:', text);
    return pool.query(text, params, callback);
  }
};
