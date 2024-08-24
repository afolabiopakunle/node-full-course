const readline = require("readline");
const fs = require("fs").promises;

// reading input and writing output
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("What's your name? ", (name) => {
//   console.log(`Your name is ${name}`);
//   rl.close();
// });

// rl.on("close", () => {
//   console.log("Thank you for coming");
//   process.exit(0);
// });

// const textContent = fs.readFileSync("./files/input.txt", "utf-8");

// fs.writeFileSync(
//   "./files/output.txt",
//   `Input from existing file: ${textContent} \nDate: ${new Date()}`
// );
// fs.readFile("./files/start.txt", "utf-8", (error1, data1) => {
//   console.log(data1);
//   fs.readFile(`./files/${data1}.txt`, "utf-8", (error2, data2) => {
//     console.log(data2);
//     fs.readFile("./files/append.txt", "utf-8", (error3, data3) => {
//       console.log(data3);
//       fs.writeFile(
//         "./files/output.txt",
//         `${data2}\n${data3}\n\nDate created: ${new Date()}`,
//         () => {
//           console.log("output created successfully");
//         }
//       );
//     });
//   });
// });

const processFiles = async () => {
  try {
    const data1 = await fs.readFile("./files/start.txt", "utf-8");
    console.log(data1);

    const data2 = await fs.readFile(`./files/${data1}.txt`, "utf-8");
    console.log(data2);

    const data3 = await fs.readFile("./files/append.txt", "utf-8");
    console.log(data3);

    await fs.writeFile(
      "./files/output.txt",
      `${data3}\n${data2}\n\n${new Date()}`
    );
  } catch (err) {
    console.log(err);
  }
};

processFiles();
