// [2,3,4,6] 
//  10->4,6 
// 5 ->2,3
// 7->3,4

var arr=[2,3,4,6], sum=10;

// for(i=0;i<arr.length;i++)
// {
//     for(j=i+1;j<arr.length;j++)
//     {
//         if(sum==arr[i]+arr[j])
//             {
//                 console.log(arr[i],arr[j]);
//                 break;
//             }
//     }
// }


// alternative logic - sorted array

var low=0, upp=arr.length-1;

while(low<upp)
{
    let total=arr[low]+arr[upp];
    // case 1
    if (total==sum)
    {
    console.log(arr[low],arr[upp]);
    break;
    }
    // case 2
    else if (total>sum)
    {
        upp--;
    }
    // case 3
    else
    {
        low++;
    }
}