// OBJECTS

// Typescript Type template

var person = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHello: function(){}          // Type Template
}

person.sayHello = function(){ console.log("Hello"+ person.firstName) };
person.sayHello();



//Objects as function params
var anotherPerson={
    firstName: "Tom",
    lastName: "Hanks"
}

var invokeperson = function(obj:{firstName:string,lastName:string}){
    console.log(" First Name: "+obj.firstName);
    console.log(" Last Name: "+obj.lastName);
}

invokeperson(anotherPerson);


//Anonymous Object
//You can create and pass an Anonymous Object on the fly.

invokeperson({firstName:"Sachin",lastName:"Tendulkar"});


//  Duck Typing : two objects are considered to be of the same type if both share the same set of properties.
//  Duck-typing verifies the presence of certain properties in the objects, rather than their actual type, to check their suitability.
//  E.g.

interface IPoint{       //interfaces kinda provide a template for the object.
    x:number,
    y:number
}

function addPoints(p1:IPoint,p2:IPoint):IPoint{
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return {x,y};
}

//Valid
var newPoint = addPoints({x:3,y:4},{x:5,y:1});

console.log(newPoint.x+":"+newPoint.y);
//var newPoint2 = addPoints({x:1},{x:4,y:3}); //INVALID