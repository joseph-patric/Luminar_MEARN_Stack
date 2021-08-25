var low=3,upp=14;

for(i=low;i<upp;i++)
{
    flag=0;
    for(j=2;j<=i/2;j++)
    {
        if(i%j==0)
        {
            flag++;
            break;
        }
    }
    if(flag==0)
    {
        console.log(i);
    }
}