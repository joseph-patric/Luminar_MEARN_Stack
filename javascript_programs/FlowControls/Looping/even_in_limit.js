// Print all even numbers between an upper and lower limit

var upperLimit=20,lowerLimit=10;

// while(lowerLimit<=upperLimit)
// {
//     console.log(lowerLimit%2==0?lowerLimit:"");
//     lowerLimit++
// }


while(lowerLimit<=upperLimit)
{
    if(lowerLimit%2==0)
    {
        console.log(lowerLimit);
    }
    lowerLimit++
}