const path = require("path");

//the platform seperator
console.log(path.sep);

//join the sequence of path segments using that platform specific seperator
const filePath = path.join("/folder/", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

//return the absolute path
const absolute = path.resolve(__dirname, "folder", "subfolder", base);
console.log(absolute);
