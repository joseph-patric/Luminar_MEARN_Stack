// find missing number from this array


var arr=[1,2,3,4,5,6,7,8,10], num1=10;


// console.log(arr.length);

for (i=0;i<arr.length;i++)
{
    if(arr[i]+1!=arr[i+1])
    {
    console.log(`The missing number is ${arr[i]+1}`); 
    break;
    }
}


// alternate method

//  var sum=num1*(num1+1)/2;
//  console.log(sum);
//  var total=0;

// for( let num of arr)
// {
//     total+=num;
// }
// console.log(sum-total);