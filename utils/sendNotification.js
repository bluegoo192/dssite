const cache = require('../database/cacheclient.js');

const sendNotification = async (memberIds, text) => {
  const promises = [];
  memberIds.forEach(memberId => {
    promises.push(cache.client.update({
      TableName: 'dssite_user_cache',
      Key: {key: memberId + ':notifications'},
      ReturnValues: 'ALL_NEW',
      UpdateExpression: 'SET notifications = list_append(if_not_exists(#notifications, :empty_list), :notification)',
      ExpressionAttributeNames: {
        '#notifications': 'notifications',
      },
      ExpressionAttributeValues: {
        ':notification': [text],
        ':empty_list': []
      }
    }).promise())
  });
  return await Promise.all(promises);
}

module.exports = sendNotification;