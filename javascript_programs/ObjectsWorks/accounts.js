var datas=[
    {acno:1000, ac_type:"savings", balance:5000, transactions:[
        {to:1001, amount:500, note:"food"},
        {to:1003, amount:600, note:"travel"},
        {to:1001, amount:700, note:"ball"}
    ]},
    {acno:1001, ac_type:"savings", balance:6000, transactions:[
        {to:1000, amount:550, note:"bill"},
        {to:1002, amount:900, note:"emi"},
        {to:1002, amount:650, note:"bill"}
    ]},
    {acno:1002, ac_type:"savings", balance:8000, transactions:[
        {to:1001, amount:600, note:"clothing"},
        {to:1000, amount:800, note:"travel"},
        {to:1000, amount:6700, note:"cycle"}
    ]}
]
// .forEach(acc=>console.log(acc.transactions.amount))

// check for account number 1005
// console.log(datas.some(acc=>acc.acno==1005));

// print account details with highest balance
// console.log(datas.reduce((ac1,ac2)=>ac1.balance>ac2.balance?ac1:ac2));

// sort in descending order of balance
// datas.sort((ac1,ac2)=>ac2.balance-ac1.balance).forEach(ac=>console.log(ac))

// print debit transactions of account 1000
// datas.filter(acc=>acc.acno==1000).forEach(acc=>console.log(acc.transactions))

// acno=1000 credit transactions
// console.log(datas.map(acc=>acc.transactions.filter(transactions=>transactions.to==1000))); 
 
// datas.map(acc=>acc.transactions).filter(trans=>trans.forEach(credit=>credit.to==1000?console.log(credit):''))

// payment history of 1001
datas.map(acc=>acc.transactions).filter(trans=>trans.forEach(credit=>credit.to==1001?console.log(credit):''))
datas.filter(acc=>acc.acno==1001).forEach(acc=>acc.transactions.map(acc=>console.log(acc)))

