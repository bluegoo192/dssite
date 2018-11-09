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
  user: process.env.DSSITE_PG_USER,
  host: process.env.DSSITE_PG_HOST,
  database: process.env.DSSITE_PG_DB,
  password: process.env.DSSITE_PG_PASS,
  port: process.env.DSSITE_PG_PORT,
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

const payments = sql.define({
  name: 'payments',
  columns: [
    { name: 'id' },
    { name: 'timestamp' },
    { name: 'member_id',
      property: 'memberId', },
    { name: 'amount' },
    { name: 'square_transaction_id',
      property: 'squareTransactionId' },
  ]
});

const permissions = sql.define({
  name: 'permissions',
  columns: ['id','role','description'],
});

const officers = sql.define({
  name: 'officers',
  columns: [
    { name: 'member_id', property: 'memberId' },
    { name: 'permission_id', property: 'permissionId' },
  ]
});

/* Set up encryption */
const salt = 10;

  // Check whether they are a *paying* member
  // returns a member object with isPaying property
  const addPaymentStatus = async (member) => {
    let paying = false;
    const q = payments
      .select(payments.star()).from(payments)
      .where(payments.memberId.equals(member.id)).toQuery();
    const response = await pool.query(q.text, q.values);
    // TODO: for now this just returns true.  Make it better
    if (response.rows.length > 0) paying = true;
    member.isPaying = paying;
    console.log(member)
    return member;
  }

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
    const q = members
      .select(members.star()).from(members)
      .where(members.email.equals(credentials.email)).toQuery();
    const response = await pool.query(q.text, q.values);
    if (response.rows.length !== 1) return false;
    const success = await bcrypt.compare(
      credentials.password,
      response.rows[0].hashedPassword);
    if (!success) return false;
    return await (addPaymentStatus(response.rows[0]));
  },
  addPaymentStatus,
  // change a member's password
  changePassword: async (password, email) => {
    hashedPassword = await bcrypt.hash(password, salt);
    const values = [hashedPassword, email];
    const text = "UPDATE members SET hashed_password=$1 WHERE email=$2";

    const response = await pool.query(text, values);

    if (response.rows.length < 1) return false;
    if (response.rows.length === 1) return true;
    if (response.rows.length > 1) throw new Error("SOMETHING HELLA WRONG WITH DATABASE");
  },
}

module.exports = {
  ...helpers,
  pool,
  members,
  payments,
  officers,
  permissions,
};
