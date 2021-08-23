// Sort 3 numbers without using an array
var num1=43,num2=61,num3=65;

if (num1<num2&num1<num3)
{
    console.log(num1);
    if (num2<num3)
    {
        console.log(num2);
        console.log(num3);
    }
    else
    {
        console.log(num3);
        console.log(num2);
    }
}
if (num2<num1&num2<num3)
{
    console.log(num2);
    if (num1<num3)
    {
        console.log(num1);
        console.log(num3);
    }
    else
    {
        console.log(num3);
        console.log(num1);
    }
}
if (num3<num2&num3<num1)
{
    console.log(num3);
    if (num2<num1)
    {
        console.log(num2);
        console.log(num1);
    }
    else
    {
        console.log(num1);
        console.log(num2);
    }
}