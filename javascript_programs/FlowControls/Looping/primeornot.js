var num=917,flag=0;

for(i=2;i<=num/2;i++)
{
    if(num%2==0)
    {
        flag=1;
        break;
    }
}

console.log(flag==0?"Prime":"Not prime");