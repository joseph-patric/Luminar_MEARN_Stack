var num=6;

for(i=1;i<=num;i++)
{
    let str="";
    for(j=0;j<i;j++)
    {
        str=str+i+" ";
    }
    let pmd="";
    for(k=num+1-i;k>0;k--)
    {
        pmd+=" ";
    }
    pmd+=str;
    console.log(pmd);
}