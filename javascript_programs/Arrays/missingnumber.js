// find missing number from this array


var arr=[1,2,3,4,5,6,7,8,9,10,12];

// console.log(arr.length);

for (i=0;i<arr.length;i++)
{
    if(arr[i]+1!=arr[i+1])
    {
    console.log(`The missing number is ${arr[i]+1}`); 
    break;
    }
}

