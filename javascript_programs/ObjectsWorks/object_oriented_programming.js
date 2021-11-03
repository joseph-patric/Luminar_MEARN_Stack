class Person{
    setPerson(name,age){
        this.age=age;
        this.name=name;
    }
    printPerson(){
        console.log(this.name,this.age);
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }

}

var obj1=new Person();
var obj2=new Person();

obj1.setPerson("Arun",23);
obj2.setPerson("Rahul",30);

obj1.printPerson();

console.log(obj2.getName());
