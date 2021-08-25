// 1
// 2+22=24
// 3+33+333=369
// 4+44+444+4444

var num=2, temp=0, sum=0;

for(i=1;i<=num;i++)
{
    temp=temp*10+num;
    sum+=temp;
}
console.log(sum);
