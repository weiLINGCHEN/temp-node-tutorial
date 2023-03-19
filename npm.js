//npm - global command, comes with node
//npm --version(npm --v)

//local dependency - use it only in particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
// 1. manual approach (create package.json in the root, create properties etc)
// 2. npm init (step by step, press enter to skip)
// 3. npm init -y (everything default)

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const flattenItems = _.flattenDeep(items);
console.log(flattenItems);
