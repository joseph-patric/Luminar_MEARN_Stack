class Parent{
    phone (){
        console.log("Samsung galaxy a7");
    }
}

class Child extends Parent{
    phone(){
        super.phone()
        console.log("iPhone 12 Pro Max");
    }
}

var child=new Child()
child.phone()