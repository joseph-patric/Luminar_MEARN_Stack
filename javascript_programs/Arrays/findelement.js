var arr=[10,11,12,13,14,15];

// find an element from the array
// linear searching - one-by-one checking and hence time consuming
var element=13, flag=0;

// for(i=0;i<arr.length;i++)
// {
//     if(arr[i]==element)
// {
//     flag=1;
//     break;
// }
// }

for (num of arr)
{
    if(num==element)
    {
        flag=1;
        break;
    }
}


if (flag==1)
console.log("element found");
else
console.log("element not found");