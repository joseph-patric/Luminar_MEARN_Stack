var employee={
    e_id:283767,
    e_name:"Rahul",
    designation:"Developer",
    salary: 50000
}

// print employee name
// console.log(employee["e_name"]);
// console.log(employee.e_name);

// check for experience. if not found add exp=1 else current exp+1

// console.log("exp" in employee);

// "exp" in employee?employee.exp+=1:employee.exp=1
// console.log(employee);

for (let key in employee)
{
    console.log(key,employee[key]);
}