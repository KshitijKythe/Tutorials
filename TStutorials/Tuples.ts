var myTuple = [10,"Hello"];
console.log(myTuple[0]);
console.log(myTuple[1]);

/* you can also declare an empty Tuple & initialize it later */
myTuple = [];
myTuple[0] = 10;
myTuple[1] = "Greetings!!";
console.log(myTuple[0]);
console.log(myTuple[1]);

/* Tuple operations */
console.log("****Tuple Operations********")
console.log("Items before push:"+myTuple.length);
myTuple.push("abc");
console.log("Items after push:"+myTuple.length);
console.log("myTuple.pop():"+myTuple.pop());
console.log("Items after pop:"+myTuple.length);

/* updating Tuple, since Tuples are mutable they can be changed */
console.log("Value before updating Tuple at 0: "+myTuple[0]);
myTuple[0] = 888;
console.log("Value after updating Tuple at 0: "+myTuple[0]);

/* Destructing a Tuple */
console.log("Destructing a tuple");
var[b,c] = myTuple;
console.log(b);
console.log(c);
