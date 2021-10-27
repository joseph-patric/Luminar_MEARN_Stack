var olympics=[
    { Country:"People's Republic of China" , Gold:38 , Silver:32, Bronze:18, Total:88},
    { Country:"Great Britain" , Gold:22 , Silver:21, Bronze:22, Total:65},
    { Country:"United States of America" , Gold:39 , Silver:41, Bronze:33, Total:113},
    { Country:"ROC" , Gold:20 , Silver:28, Bronze:23, Total:71},
    { Country:"Japan" , Gold:27 , Silver:14, Bronze:17, Total:58},
    { Country:"India" , Gold:1 , Silver:2, Bronze:4, Total:7}
    ]

// print country names participating in olympics

// for (let name of olympics){
//     console.log(name.Country);
// }

// olympics.map(nation=>nation.Country).forEach(c_name=>console.log(c_name))

// country with most gold medals

// console.log(olympics.reduce((a,b)=>a.Gold>b.Gold?a:b));

// country with the most medals

// console.log(olympics.reduce((a,b)=>a.Total>b.Total?a:b));


// sort countries based on gold medals

// olympics.sort((a,b)=>b.Gold-a.Gold)
// console.log(olympics);

// sort countries based on total medals 

olympics.sort((a,b)=>b.Total-a.Total)
console.log(olympics);

// countries with silver >25

// console.log(olympics.filter(a=>a.Silver>25));


// list the country names with gold medal > 25

// console.log(olympics.filter(a=>a.Gold>25));

// is india in the list 

// var res=olympics.some(a=>a.Country=="India")
// console.log(`India is in top 5 ranks of Olympics: ${res}`)