// var num=5, num1=0, num2=1, fibo=[];

// for(i=0;i<num;i++)
// {
//     if (i==0)
//     {
//         fibo[i]=num1;
//     }
//     else if (i==1)
//     {
//         fibo[i]=num2;
//     }
//     else
//     {
//         fibo[i]=num1+num2;
//         num1=num2;
//         num2=fibo[i];
//     }
// }

// console.log(fibo[num-1]);


// recursion method

function fibonacci(n)
{
    if (n==0|n==1)
    {
        return n;
    }
    else
    {
        return fibonacci(n-1) + fibonacci (n-2)
    }
}

console.log(fibonacci());
