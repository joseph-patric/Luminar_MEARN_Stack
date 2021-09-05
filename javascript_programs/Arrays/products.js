var products=[
[0001, "Complan", 260, 20],
[0002, "Boost", 270, 50],
[0003, "Horlicks", 225, 28],
[0004, "BournVita", 230, 5],
[0005, "Milo", 240, 0]
]

// sort by price

// products.sort((item1,item2)=>item1[2]-item2[2]).forEach(item=>console.log(item))
console.log(products.sort((item1,item2)=>item1[3]-item2[3]));

// print product names

// console.log(products.map(name=>name[1]));

// print available product names

// console.log(products.filter(stock=>stock[3]!=0).map(name=>name[1]));

// print out of stock product details

// console.log(products.filter(stock=>stock[3]==0).map(name=>name[1]));

// list all products whose price > 250

// console.log(products.filter(price=>price[2]>250));


// product with the lowest cost

// console.log(products.reduce((price1,price2)=>price1[2]<price2[2]?price1:price2));

// console.log(products.reduce((n1,n2)=>n1[2]>n2[2]?n1:n2));
// is there any item available under 230

// console.log(products.filter(price=>price[2]<230));


// product with the most stock

// console.log(products.reduce((prod1,prod2)=>prod1[3]>prod2[3]?prod1:prod2));

// find() method

// check if complan is in the list of items

// console.log(products.find(item=>item[1]=="Complan"));

// check if we can purchase any item for less than 100rs

// console.log(products.some(item=>item[2]<100));

// forEach() method

// List all items using forEach()

// products.forEach(item=>console.log(item[1]))
