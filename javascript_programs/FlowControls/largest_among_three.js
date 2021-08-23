var num1=83,num2=88,num3=78;

// console.log((num1>num2 & num1>num3)?"Num 1 is largest":(num2>num1 & num2>num3)?"Num 2 is largest":"Num 3 is largest");

// console.log(num1>num2?num1>num3?num1:num2>num3?num2:num3:num2>num3?num2:num3);

console.log(num1>num2&num1>num3?num1:num2>num1&num2>num3?num2:num3);