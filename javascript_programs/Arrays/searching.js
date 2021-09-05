// linear search - one by one conditional checking

var arr=[1,2,3,4,5,8,6,7,9,10]

// binary search

let low=0, upp=arr.length-1, element=9;

while(low<=upp)
{
    mid=Math.floor((low+upp)/2);
    if(element>arr[mid])
    {
        low=mid+1;
    }   
    else if (element<arr[mid])
    {
        upp=mid-1;
    }
    else if (element==arr[mid])
    {
        console.log("element found");
        break;
    }
    else
    {
        console.log("element not found");
        break;
    }
}
