require("dotenv").config();

const lambda = require("./index");

async function run() {
  const result = await lambda.handler({ name: "kenyér", unit: "kg", stock: 1 });
  console.log(result);
}

run();
