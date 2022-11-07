const fs = require("fs");
const path = require("path");
const writeStream = fs.createWriteStream(path.join(__dirname, "text.txt"));
const { stdout, stdin } = process;

stdout.write("Enter some text, please! \n");

stdin.on("data", (data) => {
  if (data.toString().trim() === "exit") {
    stdout.write("Good Luck!!");
    process.exit();
  }
  writeStream.write(data);
});

process.on("SIGINT", () => {
  stdout.write("Good Luck!!");
  process.exit();
});
