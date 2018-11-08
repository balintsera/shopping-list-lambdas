const AWS = require("aws-sdk");
const uuid = require("uuid/v1");
const docClient = new AWS.DynamoDB.DocumentClient();
const table = "items";

// for running it locally
exports.config = config => {
  AWS.config.update(config);
};

exports.handler = async event => {
  const item = {
    id: uuid(),
    name: event.name,
    unit: event.unit,
    stock: event.stock ? event.stock : 0,
    bought: null,
    isOutOfStock: true
  };

  const params = {
    TableName: table,
    Item: item
  };
  try {
    const result = await docClient.put(params).promise();
    console.log("saved", result);
    return item;
  } catch (err) {
    return err;
  }
};
