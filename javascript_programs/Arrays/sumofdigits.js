// sum of digits of a number 
// 13 -> 1+3=4
// 143 -> 1+4+3=8
// 112 -> 1+1+2=4

var num=18996, sum=0;

while (num!=0)
{
let adder=num%10;
sum+=adder;
num = Math.floor(num/10);
}

console.log(sum);