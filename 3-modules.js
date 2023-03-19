// CommonJs - every file is module(by default)
// Modules - Encapsulated code (noly share minimum)

// const names = require("./4-names");
// or destructure obj
const { jerry, john } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-gernade");
// sayHi(john);
// sayHi(jerry);
// console.log(data);
