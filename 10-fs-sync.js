//interate with file system - 2 option
// 1 - asynchronously non blocking
// 2 - synchronously blocking
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./folder/first.txt", "utf-8");
const second = readFileSync("./folder/second.txt", "utf-8");

console.log(first, second);

//provide the file name
// if file is not there then node will create that file
// if not, override it by default
// if you just want to open to the file, pass the third argument
writeFileSync(
  "./folder/subfolder/result-sync.txt",
  `This is the result: ${first}, ${second}.`,
  { flag: "a" }
);
