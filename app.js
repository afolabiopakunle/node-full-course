const { log } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? ", (name) => {
  console.log(`Your name is ${name}`);
  rl.close();
});

rl.on("close", () => {
  console.log("Thank you for comming");
  process.exit(0);
});
