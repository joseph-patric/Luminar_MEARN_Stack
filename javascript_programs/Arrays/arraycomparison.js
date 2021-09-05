var arr1=[1,2,3,4,5];
var arr2=[5,3,4,2,1,6];

// var flag=0;

// for (i=0;i<arr1.length;i++)
// {
//     for (j=0;j<arr2.length;j++)
//     {
//         if(arr1[i]==arr2[j])
//         {
//             flag++
//         }
//     }
// }

// if (flag==arr1.length)
// {
//     console.log("similar array");
// }
// else
// {
//     console.log("array not similar");
// }

// Using sort() method

arr1.sort((num1,num2)=>num1-num2);
arr2.sort((num1,num2)=>num1-num2);
var flag=0;
for (let i=0; i<arr1.length | i<arr2.length; i++)
{
    if (arr1[i]!=arr2[i])
    {
        flag=1;
        break;
    }
}

if (flag==0)
{
    console.log("similar array");
}
else
{
    console.log("array not similar");
}