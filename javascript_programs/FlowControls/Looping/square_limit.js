// print numbers whose square value is within limit
var upperLimit=99,lowerLimit=9,square=0;;

let num = Math.floor(Math.sqrt(lowerLimit));

// console.log(num);

while (square<upperLimit)
{
    square= num**2
    if(square<=upperLimit&square>=lowerLimit)
    console.log(num);
    num++
}