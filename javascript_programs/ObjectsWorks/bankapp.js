// bank accountCreate, deposit, balanceEnquiry

class Bank{
    accountCreate(acno,ac_type,user_name,balance){
        this.acno=acno;
        this.ac_type=ac_type;
        this.user_name=user_name;
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
    }
    balanceEnquiry(){
        return this.balance;
    }
}

var user1=new Bank
var user2=new Bank

user1.accountCreate(841354,"Savings","Peter",30000)
user1.deposit(2000)
console.log(user1.balanceEnquiry());

user2.accountCreate(685465,"Current","Fahad",0)
console.log(user2.balanceEnquiry());
user2.deposit(50000)
user1.deposit(-10000)
console.log(user1.balanceEnquiry(),user2.balanceEnquiry());