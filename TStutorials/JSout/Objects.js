// OBJECTS
// Typescript Type template
var person = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHello: function () { } // Type Template
};
person.sayHello = function () { console.log("Hello" + person.firstName); };
person.sayHello();
//Objects as function params
var anotherPerson = {
    firstName: "Tom",
    lastName: "Hanks"
};
var invokeperson = function (obj) {
    console.log(" First Name: " + obj.firstName);
    console.log(" Last Name: " + obj.lastName);
};
invokeperson(anotherPerson);
//Anonymous Object
//You can create and pass an Anonymous Object on the fly.
invokeperson({ firstName: "Sachin", lastName: "Tendulkar" });
function addPoints(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
//Valid
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 });
console.log(newPoint.x + ":" + newPoint.y);
//var newPoint2 = addPoints({x:1},{x:4,y:3}); //INVALID 
