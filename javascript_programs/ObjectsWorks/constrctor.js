class Person{
// constructor name is always same as the class name in java and c++. __init__ for python
// For javascript constructor name is always constructor
    constructor(age,name){
        this.age=age;
        this.name=name;
        // constructor is usedd for initialising instance variables
    }

    printPerson(){
        console.log(this.age,this.name);
    }
}

var person=new Person(17,"Ram")

person.printPerson()