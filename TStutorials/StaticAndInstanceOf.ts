//STATIC KEYWORD and instanceof

class StaticMem{

    static num:number;
    
    static disp():void{
        console.log("The value of num is: "+StaticMem.num);
    }
}

StaticMem.num = 12;
StaticMem.disp();

var obj = new StaticMem();

if(obj instanceof StaticMem){
    console.log("True");
}else{
    console.log("False");
}