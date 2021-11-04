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
        console.log(`Your account number ${this.acno} has been credited with ${amount}. Your current balance is ${this.balance}`);
    }
    balanceEnquiry(){
        console.log(`The current balance of your account ${this.acno} is ${this.balance}`);
    }
    withdrawal(amount){
        if (this.balance>=amount){
            this.balance-=amount
            console.log(`Your account number ${this.acno} has been debited with ${amount}. Your current balance is ${this.balance}`);
        }
        else{
            console.log(`Your account number ${this.acno} does not have sufficient balance to proceed with the transaction.`);
        }
    }
}

var user1=new Bank
var user2=new Bank

user1.accountCreate(841354,"Savings","Peter",30000)
user1.deposit(2000)
// user1.balanceEnquiry()

// user2.accountCreate(685465,"Current","Fahad",0)
// user2.balanceEnquiry();
// user2.deposit(50000)
user1.withdrawal(33000)
// console.log(user1.balanceEnquiry(),user2.balanceEnquiry());