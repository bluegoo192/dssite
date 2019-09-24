const db = require('../database/sqlclient.js')
const PAYMENT_AMOUNT = 1500;

// member is an object; must contain either id or email
// returns either true (success), a user-friendly error message, or throws an error
const markMemberAsPaid = async (member, transactionId) => {
  if (member.id == null && member.email == null) {
    throw 'invalid arguments.  {member} must contain id or email'
  }
  if (member.id == null) {
    const getIdQuery = await db.members
      .select(db.members.id).from(db.members)
      .where(db.members.email.equals(member.email)).toQuery();
    const getIdResponse = await db.pool.query(getIdQuery.text, getIdQuery.values);
    if (getIdResponse.rows[0] == null) {
      return 'Sorry, no member found with that email.'
    }
    if (getIdResponse.rows[0].id == null) {
      throw 'CRITICAL ERROR: something is wrong with the query in markMemberAsPaid()'
    }
    member.id = getIdResponse.rows[0].id;
  }
  const data = {
    memberId: member.id,
    timestamp: new Date(),
    amount: PAYMENT_AMOUNT,
  };
  if (transactionId) data.squareTransactionId = transactionId;
  const addPaymentQuery = db.payments.insert(data).toQuery();
  const addPaymentResponse = await db.pool.query(addPaymentQuery.text, addPaymentQuery.values);
  if (addPaymentResponse.rowCount < 0 || addPaymentResponse.rowCount > 1) {
    throw 'CRITICAL ERROR: something is seriously wrong with the database config (markMemberAsPaid)'
  }
  const status = addPaymentResponse.rowCount === 1
    ? true
    : 'Failed to insert payment.  Please see an officer for help.'
  return status;
}

module.exports = markMemberAsPaid;