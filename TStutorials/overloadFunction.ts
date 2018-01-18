//Describing function overloading

//Declare the overloaded functions

function disp(s:string):void;
function disp(n:number,s:string):void;

//Define the overloaded function

function disp(a:any,b?:any){
    console.log(a);
    console.log(b);
}

disp("abc");
//disp(1);
disp(1,"xyz")