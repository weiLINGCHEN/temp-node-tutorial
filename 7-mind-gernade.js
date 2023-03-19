//the node wraps it in the function when exporting
//so when you require it, you invokes the one executing in this file

const num1 = 10;
const num2 = 20;

function sum() {
  console.log(`The sum of num1 and num2 is ${num1 + num2}.`);
}
sum();
