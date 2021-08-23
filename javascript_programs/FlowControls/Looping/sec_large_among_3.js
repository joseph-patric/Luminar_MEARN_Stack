// Find second largest number among 3 numbers

var num1=36,num2=40,num3=32;

if (num1>num2&num1>num3)
{
    if(num2>num3)
    {
        console.log(num2);
    }
    else
    {
        console.log(num3);
    }
}
else if (num2>num1&num2>num3)
{
    if (num1>num3)
    {
        console.log(num1);
    }
    else
    {
        console.log(num3);
    }
}
else
{
    if(num1>num2)
    {
        console.log(num1);
    }
    else
    {
        console.log(num2);
    }
}