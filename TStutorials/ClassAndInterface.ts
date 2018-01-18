// DATA HIDING, CLASSES AND INTERFACES

interface Loan{
    
    interest:number;
}

class Encapsulate implements Loan{

    interest:number = 100;
    str:string = "Hello";
    private pStr:string = "World!!";
}

var obj = new Encapsulate();
console.log("Public member accessible: "+obj.str);
console.log("Member of the implemented interface: "+obj.interest);
//console.obj(obj.pStr);  //pStr is a private member