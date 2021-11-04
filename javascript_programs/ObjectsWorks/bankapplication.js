// var account_details={
//     1000:{acno:1000,balance:2000,username:"userone",password:"****one"},
//     1001:{acno:1001,balance:3000,username:"usertwo",password:"****two"},
//     1002:{acno:1002,balance:2002,username:"userthree",password:"****three"},
//     1003:{acno:1003,balance:20000,username:"userfour",password:"****four"}
// }

// check whether acc no 1000 is present

// console.log(1000 in account_details)

// print username and password of 1001

// console.log(account_details["1001"]["username"],account_details["1001"]["password"] );

// print balance of 1003

// console.log(account_details[1003].balance);

class Bank {
    account_details = {
        1000: { acno: 1000, balance: 2000, username: "userone", password: "****one" },
        1001: { acno: 1001, balance: 3000, username: "usertwo", password: "****two" },
        1002: { acno: 1002, balance: 2002, username: "userthree", password: "****three" },
        1003: { acno: 1003, balance: 20000, username: "userfour", password: "****four" }
    }

    session = {}

    accountCreate(acno, balance, username, password) {
        if (acno in this.account_details) {
            console.log("account already exists");
        }
        else {
            // this.account_details[acno]={acno:acno,balance:balance,username:username,password:password}
            // if key and value are same, no need to explicitly add
            this.account_details[acno] = { acno, balance, username, password }
            console.log("new account created");
            console.log(this.account_details);
        }

    }

    authenticate(acno, username, password) {
        if (acno in this.account_details) {
            if (this.account_details[acno].username == username) {
                if (this.account_details[acno].password == password) {
                    console.log("Authentication successful");
                    this.session["user"] = acno;
                    // console.log(this.session);
                }
                else {
                    console.log("Incorrect password");
                }
            }
            else {
                console.log("Username incorrect");
            }
        }
        else {
            console.log("Account does not exist");
        }
    }

    fundTransfer(from_acno, to_acno, amount) {
        if (from_acno == this.session["user"]) {
            if (to_acno in this.account_details) {
                if (this.account_details[from_acno].balance >= amount) {
                    this.account_details[from_acno].balance -= amount
                    this.account_details[to_acno].balance += amount
                    console.log("Transaction successful");
                    console.log(`Your account ${from_acno} is debited with amount ${amount}. 
                    Available balance is ${this.account_details[from_acno].balance}. `);
                }
                else {
                    console.log("Insufficient balance.");
                }

            }
            else {
                console.log("Invalid receiver account number.");
            }

        }
        else {
            console.log("Invalid session. Please login first.");
        }


    }

    // balanceEnquiry(acno){
    //     if (this.session['user']==acno){
    //         console.log(`Your current balance is ${this.account_details[acno].balance}`);
    //     }
    //     else{
    //         console.log("Invalid session. Please login first.");
    //     }
    // }

    // balance enquiry without passing acno

    balanceEnquiry(){
        if ("user" in this.session){
            console.log(`Your current balance is ${this.account_details[this.session['user']].balance}`);
        }
        else{
            console.log("Invalid session. Please login first.");
        }
    }
}




var obj = new Bank

// obj.accountCreate(1001,4500,"userfive","****five")

obj.authenticate(1003, "userfour", "****four")
obj.fundTransfer(1003,1001,2000)

obj.balanceEnquiry()