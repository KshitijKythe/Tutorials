// CLASSES
var Car = /** @class */ (function () {
    //constructor
    function Car(engine) {
        this.engine = engine;
    }
    //function: don't use function keyword
    Car.prototype.disp = function () {
        console.log("Engine is: " + this.engine);
    };
    return Car;
}());
//create an object
var obj = new Car("McLaren");
//access the field
console.log("Reading attrib value Engine: " + obj.engine);
//access the function
obj.disp();
