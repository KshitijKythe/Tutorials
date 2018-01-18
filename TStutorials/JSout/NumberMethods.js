/* -------------------NUMBER METHODS---------------------------- */
// toExponential() ?
var num1 = 1225.30;
var val1 = num1.toExponential();
console.log(val1);
/* val1 = num1.toExponential(4);
console.log(val1); */
// toFixed()
var num2 = 177.234;
console.log("num2 toFixed() is: " + num2.toFixed());
console.log("num2 toFixed(2) is: " + num2.toFixed(2));
console.log("num2 toFixed(6) is: " + num2.toFixed(6));
// toLocaleString() ?
var num = new Number(177.1234);
console.log("toLocalString():  " + num.toLocaleString());
// toPrecision()
var num = new Number(7.123456);
console.log("toPrecision(): " + num.toPrecision());
console.log("toPrecision(1): " + num.toPrecision(1));
console.log("toPrecision(2): " + num.toPrecision(2));
// toString()
var num = new Number(13);
console.log("Default base, base 10: " + num.toString());
console.log("Base 2: " + num.toString(2));
console.log("Base 8: " + num.toString(8));
console.log("Base 16: " + num.toString(16));
// valueOf() ?
var num = new Number(10);
console.log(num.valueOf());
