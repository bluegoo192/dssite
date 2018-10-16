const aws = require('aws-sdk');
aws.config.credentials = new aws.SharedIniFileCredentials({profile: 'dssite'});
aws.config.update({
  region: 'us-east-2',
  endpoint: 'https://dynamodb.us-east-2.amazonaws.com',
});

const client = new aws.DynamoDB.DocumentClient();
const USER_CACHE = 'dssite_user_cache';

const put = async (userId, property, data) => {
  data.key = userId + ":" + property;
  return await client.put({
    TableName: USER_CACHE,
    Item: data,
  }).promise();
}

const get = async (userId, property) => {
  const params = {
    TableName: USER_CACHE,
    KeyConditionExpression: '#k = :usrprop',
    ExpressionAttributeNames: {
      '#k': 'key'
    },
    ExpressionAttributeValues: {
      ':usrprop': userId + ':' + property
    }
  };
  const response = await client.query(params).promise();
  if (response.Count > 1) {
    console.log(response);
    throw 'Key was not unique';
  }
  return response.Items[0];
}

module.exports = {put, get, client};
