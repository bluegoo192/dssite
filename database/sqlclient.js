/* This module encapsulates connection to the Postgres database.
  Right now, we use this database for managing users.
  PSQL connection command, for manual editing:
  psql --port=5432 --host=ucsb-data-science.postgres.database.azure.com --username=dsadmin@ucsb-data-science -W
*/

const { Pool } = require('pg');
const sql = require('sql');

const pool = new Pool({
  user: 'dsadmin@ucsb-data-science',
  host: 'ucsb-data-science.postgres.database.azure.com',
  database: 'postgres',
  password: '!@#123qweQWE',
  port: 5432,
});

sql.setDialect('postgres');

// Define sql table
const members = sql.define({
  name: 'members',
  columns: [
    { name: 'id' },
    { name: 'email' },
    { name: 'hashed_password',
      property: 'hashedPassword', },
    { name: 'first_name',
      property: 'firstName', },
    { name: 'last_name',
      property: 'lastName', },
    { name: 'nickname' },
    { name: 'year_started_school',
      property: 'yearStartedSchool', },
    { name: 'last_known_major',
      property: 'lastKnownMajor', },
  ]
});

// Shorthand query function that processes a sql query object and runs it
const query = (sqlQuery) => {
  console.log(sqlQuery.toQuery().text);
  return pool.query(sqlQuery.toQuery().text);
}

module.exports = {
  query,
  pool,
  members,
};
