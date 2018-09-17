/* This module encapsulates connection to the Postgres database.
  Right now, we use this database for managing users.
  PSQL connection command, for manual editing:
  psql --port=5432 --host=ucsb-data-science.postgres.database.azure.com --username=dsadmin@ucsb-data-science -W
*/

const { Pool } = require('pg');
const sql = require('sql');
const bcrypt = require('bcrypt');

/* Set up connection pool */
const pool = new Pool({
  user: 'dsadmin@ucsb-data-science',
  host: 'ucsb-data-science.postgres.database.azure.com',
  database: 'postgres',
  password: '!@#123qweQWE',
  port: 5432,
});

/* Set up application-side sql schema */
sql.setDialect('postgres');
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

/* Set up encryption */
const salt = 10;

/* Helper functions for quality of life */
const hash = async (data) => {
  data.hashedPassword = await bcrypt.hash(data.password, salt);
  delete data.password;
  return data;
}
const helpers = {
  // Processes a sql query object and runs it
  query: async (sqlQuery) => {
    const query = sqlQuery.toQuery();
    return await pool.query(query.text, query.values);
  },
  // Adds a member, and returns the number of members inserted (1 for success)
  addMember: async (memberData) => {
    await hash(memberData);
    const query = members.insert(...Object.keys(memberData).map(prop =>
      members[prop].value(memberData[prop])
    )).toQuery();
    return await pool.query(query.text, query.values);
  },
  // Check a member's login credentials
  checkLogin: async (credentials) => {
    // credentials.hashedPassword = await bcrypt.a
  }
}

module.exports = {
  ...helpers,
  pool,
  members,
};
