// CLASS INHERITANCE


//SINGLE LEVEL INHERITANCE
class Shape{
    
    Area:number;

    constructor(a:number){
        this.Area = a;
    }
}

class Circle extends Shape{

    disp():void{
        console.log("Area of the circle: "+this.Area);
    }
}

console.log("Single Level Inheritance:");
var obj = new Circle(123);
obj.disp();



//MULTI-LEVEL INHERITANCE
class Root{
    str:string;
}

class Child extends Root{
}

class Leaf extends Child{

}

var objt = new Leaf();
objt.str = "Hello";
console.log("Multi-Level Inheritance:");
console.log(objt.str);