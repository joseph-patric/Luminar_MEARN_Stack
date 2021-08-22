// Program for swapping numbers

var num1=10;  var num2=20;

console.log(`Before swap: ${num1} & ${num2}`);

num1=num1+num2;
num2=num1-num2;
num1=num1-num2;

console.log(`After swap: ${num1} & ${num2}`);