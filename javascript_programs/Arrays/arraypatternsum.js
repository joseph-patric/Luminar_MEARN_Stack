var arr=[2,4,6]; //[10,8,6]
// arr=[8,6,7]; //[13,15,14]

// logic 1 - adding all elements except index

// alternate simple logic

var total=0;
for (num of arr)
{
    total+=num;
}

for (num of arr)
{
    console.log(total-num);
}