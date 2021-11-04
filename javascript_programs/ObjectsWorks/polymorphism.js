// more than one form or many forms
// method overloading - same method name but different number of parameters

class Calculation{
    add(){
        console.log("inside no arg method");
    }
    add(num1){
        console.log("inside single arg method");
    }
    add(num1,num2){
        console.log("insid etwo argument method");
    }
}

var calc=new Calculation()
calc.add(10,20);
calc.add(10);
calc.add();

// in javascript, only the recently implemented method in the class will work - add(num1,num2)