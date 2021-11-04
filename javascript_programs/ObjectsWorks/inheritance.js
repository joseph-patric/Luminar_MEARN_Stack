// inheritance
// class Parent{
//     phone(){
//         console.log("inside parent class phone method");
//     }
// }

// // single inheritance

// class Child extends Parent{

// }

// var child=new Child()
// child.phone()

class Parent{
    m1(){
        console.log("inside parent m1()");
    }
}

class SubChild extends Parent{
    m2(){
        console.log("inside SubChild m2()");
    }
}

class Child extends SubChild{
    m3(){
        console.log("inside Child m3()");
    }
}

var child= new Child
child.m3()
child.m2()
child.m1()

var subchild=new SubChild
subchild.m2()
subchild.m1()
