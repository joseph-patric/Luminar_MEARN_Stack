// nested array

var employees=[
    [1000,"Ram",2,35000,"Developer"],
    [1001,"Raju",1,30000,"Developer"],
    [1002,"Rex",3,27000,"QA"],
    [1003,"Roma",1,22000,"QA"]

]

// print employee names

// for (let employee of employees)
// {
//     console.log(employee[1]);
// }

// print employee designation

// for (let employee of employees)
// {
//     console.log(`${employee[1]} - ${employee[4]}`);
// }

// print employee salaries greater than 23000

// for (let employee of employees)
// {
//     if (employee[3]>=23000)
//     {
//         console.log(`${employee[1]} - ${employee[3]}`);
//     }
// }


// print highest paid employee

// let max_sal=0;
// for (let emp of employees)
// {
//     if (emp[3]>max_sal)
//     {
//         max_sal=emp[3];
//     }
// }
// for (let emp of employees)
// {
//     if (emp[3]==max_sal)
//     {
//         console.log(emp); 
//     }
// }


// print lowest paid employee

// let min_sal=employees[0][3];
// for (let emp of employees)
// {
//     if (emp[3]<min_sal)
//     {
//         min_sal=emp[3];
//     }
// }
// for (let emp of employees)
// {
//     if (emp[3]==min_sal)
//     {
//         console.log(emp); 
//     }
// }

// print number of employees working as developer
// print number of employees working as qa

// let count=0;
// for (let employee of employees)
// {
//     if (employee[4]=="Developer")
//     {
//         count++;
//     }
// }

// console.log(`Number of developers is ${count}`);

// count=0;
// for (let employee of employees)
// {
//     if (employee[4]=="QA")
//     {
//         count++;
//     }
// }

// console.log(`Number of QA is ${count}`);

// to print employee names
// console.log(employees.map(emp=>emp[1]));

// to print employee designations

// console.log(employees.map(emp=>emp[4]));

// to print details of developers

// console.log(employees.filter(emp=>emp[4]=="Developer"));

// to print details of employees with salary greater than 23000

// console.log(employees.filter(emp=>emp[3]>23000));

// to print details of developers with salary greater than 23000

console.log(employees.filter(emp=> emp[3]>23000 & emp[4]=="Developer").map(emp=>emp[1]));
