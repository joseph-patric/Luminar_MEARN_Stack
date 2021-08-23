// sum of cubes of each digit

var num=1023,sum=0;

while(num>0)
{
    sum+=(num%10)**3;
    num=Math.floor(num/10);
}
console.log(sum);