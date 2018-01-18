// CLASSES

class Car{

    //field: don't use var keyword
    engine:string;          

    //constructor
    constructor(engine:string){
        this.engine = engine;
    }


    //function: don't use function keyword
    disp():void{
        console.log("Engine is: "+ this.engine);
    }
}

//create an object
var obj = new Car("McLaren");

//access the field
console.log("Reading attrib value Engine: "+ obj.engine);

//access the function
obj.disp();