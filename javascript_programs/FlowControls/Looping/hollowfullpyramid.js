var num=9;

for(i=1;i<=num;i++)
{
    let str="";
    for(j=0;j<i;j++)
    {
        if(j==0|j==i-1|i==num)
        {
            str+=i+" ";
        }
        else
        {
            str+="  "
        }
         
    }
    let pmd="";
    for(k=num+1-i;k>0;k--)
    {
        pmd+=" ";
    }
    pmd+=str;
    console.log(pmd);
}
