// print numbers whose power value is within limit
var upperLimit=81,lowerLimit=9,power=0,i=3;
let num = Math.floor(Math.sqrt(lowerLimit));
while (power<upperLimit)
{
    power= num**i;
    if(power<=upperLimit&power>=lowerLimit)
    {
        console.log(num);
    }
    num++
}

