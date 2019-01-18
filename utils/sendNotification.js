const cache = require('../database/cacheclient.js');
const db = require('../database/sqlclient.js');
const uuidv5 = require('uuid/v5');

const uuid = () => {
  return uuidv5('datascience.ucsb.org', uuidv5.DNS);
};

const sendNotification = async (memberIds, text, sendAll) => {
if (memberIds.length>0&&sendAll==true){
  throw "Bad parameters! Don't sendAll and have members selected."
}
if (sendAll==true)
{
  const query = db.members.select(db.members.id).from(db.members).toQuery();
  memberIds = (await db.pool.query(query.text,query.values)).rows.map(item => item.id);
}
  const promises = [];
  memberIds.forEach(memberId => {
    promises.push(cache.client.update({
      TableName: 'dssite_user_cache',
      Key: {key: memberId + ':notifications'},
      ReturnValues: 'ALL_NEW',
      UpdateExpression: 'SET #notificationID = :notification',
      ExpressionAttributeNames: {
        '#notificationID': 'notification:'+uuid(),
      },
      ExpressionAttributeValues: {
        ':notification': text,
      }
    }).promise())
  });
  return await Promise.all(promises);
}

module.exports = sendNotification;
