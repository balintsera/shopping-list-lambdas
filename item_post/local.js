const lambda = require("./index");

async function run() {
  lambda.config({ region: "us-west-2" });
  const result = await lambda.handler({ name: "kenyér", unit: "kg", stock: 1 });
  console.log(result);
}

run();
