//  INTERFACE AND UNION
//commandLine as string
var options = {
    program: "Test1",
    commandLine: "Hello"
};
console.log("Test1");
console.log(options.commandLine);
//commandLine as string array
options = {
    program: "Test2",
    commandLine: ["Hello", "World"]
};
console.log("Test2");
console.log(options.commandLine[0]);
console.log(options.commandLine[1]);
//commandLine as function expression
options = {
    program: "Test3",
    commandLine: function () { return "**Hello World"; }
};
console.log("Test3");
//console.log(options.commandLine());  //can't call it directly, first store it in a variable
var fn = options.commandLine;
console.log(fn());
