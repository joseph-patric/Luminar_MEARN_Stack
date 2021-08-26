function factorial(num)
{
       
    let fact=1;
    for(i=1;i<=num;i++)
    {
        fact=fact*i;
    }
    return fact;

    // recursion
    // if(num<0 | num==0)
    // return 1;
    // return num*factorial(num-1)
}

console.log(factorial(5));