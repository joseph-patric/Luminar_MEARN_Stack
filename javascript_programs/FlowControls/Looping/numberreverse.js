// var num=1025,rev=0;

// while(num!=0)
// {
//     // rev*=10;
// let temp=num%10;
// // rev+=temp;
// rev=rev*10+temp;
// num=Math.floor(num/10);
// }

// console.log(rev);

var num=1025,rev="";

while(num!=0)
{
    // rev*=10;
let temp=num%10;
// rev+=temp;
rev+=temp
num=Math.floor(num/10);
}

console.log(rev);