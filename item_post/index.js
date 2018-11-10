const AWS = require("aws-sdk");
const uuid = require("uuid/v1");
const table = process.env.AWS_DDB_TABLE;
AWS.config.update({
  region: process.env.AWS_REGION,
  endpoint: process.env.AWS_DDB, //"http://localhost:8000",
  version: "2012-08-10"
});

const DB = new AWS.DynamoDB();

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
    const result = await DB.putItem(params).promise();
    return item;
  } catch (err) {
    return err;
  }
};
