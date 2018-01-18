// DATA HIDING, CLASSES AND INTERFACES
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.interest = 100;
        this.str = "Hello";
        this.pStr = "World!!";
    }
    return Encapsulate;
}());
var obj = new Encapsulate();
console.log("Public member accessible: " + obj.str);
console.log("Member of the implemented interface: " + obj.interest);
//console.obj(obj.pStr);  //pStr is a private member 
