// INTERFACE AND INHERITANCE

//Simple Interface Inheritance

interface Person{
    age:number
}

interface Musician extends Person{
    instrument:string
}

/* var drummer:Musician = {
    age: 10,
    instrument: "Drums"
}
 */

var drummer=<Musician>{};
drummer.age = 27;
drummer.instrument = "Guitar;"
console.log("Age: "+drummer.age);
console.log("Instrument: "+drummer.instrument);


/* MULTIPLE INTERFACE INHERITANCE */

interface parentOne{
    v1:number
}

interface parentTwo{
    v2:number
}

interface Child extends parentOne,parentTwo {}

/* var obj:Child = {
            v1:10,
            v2:20
} */
var obj = <Child>{};
obj.v1=10;
obj.v2=20;
console.log("Multiple Interface Inheritance:")
console.log("Value 1:"+obj.v1);
console.log("Value 2:"+obj.v2);