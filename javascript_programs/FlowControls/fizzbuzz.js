// Number /3 print fizz
// Number /5 print buzz
// Number /15 print fizzbuzz
// change

// var num=15;

// if (num%15==0)
// {
//     console.log("FizzBuzz");
// }

// else if (num%5==0)
// {
//     console.log("Buzz");
// }

// else if (num%3==0)
// {
//     console.log("Fizz");
// }

// Alternate method

var num=15;
var res="";

if (num%3==0)
{
    res+="fizz"
}
if (num%5==0)
{
    res+="buzz"
}

console.log(res);
