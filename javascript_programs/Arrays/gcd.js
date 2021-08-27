// hcf

var num1=24, num2=48, gcd=0;

for (i=1;i<=num1&i<=num2;i++)
{
    if (num1%i==0 & num2%i==0)
    {
        gcd=i;
    }
}

console.log(gcd);