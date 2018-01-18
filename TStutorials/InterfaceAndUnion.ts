//  INTERFACE AND UNION

interface runOptions{
    program:string,
    commandLine: string[]|string|(()=>string)
}

//commandLine as string
var options:runOptions = {
                program:"Test1",
                commandLine: "Hello"
}

console.log("Test1");
console.log(options.commandLine);

//commandLine as string array
options = {
    program: "Test2",
    commandLine: ["Hello","World"]
} 

console.log("Test2");
console.log(options.commandLine[0]);
console.log(options.commandLine[1]);

//commandLine as function expression
options={
    program: "Test3",
    commandLine: ():string=>{return "**Hello World"; }
}


console.log("Test3");
//console.log(options.commandLine());  //can't call it directly, first store it in a variable
var fn:any = options.commandLine;
console.log(fn());