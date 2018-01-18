// Describing lambda functions and statements
var foo = function (x) { 10 + x; };
console.log(foo(100));
//lambda statement
var bar = function (x) {
    x += 10;
    console.log(x);
};
bar(100);
//param type inference
var func = function (x) {
    if (typeof x == "number")
        console.log(x + " is numeric.");
    else if (typeof x == "string")
        console.log(x + " is a string.");
};
func(12);
func("Tom");
//optional params for a single parameter
var display = function (x) {
    console.log("Displaying: " + x);
};
display(10);
//Optional braces for a single statement, empty parentheses for no params
var disp = function () { return console.log("Function invoked"); };
disp();
