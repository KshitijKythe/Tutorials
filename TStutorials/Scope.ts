var global_num=12       //global variable

class Numbers{

    num_val = 13;         //class variable
    static sval=10;       //static variable

    storeNum():void{
        var local_num=14;
    }
}

console.log("Global num:"+global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log(obj.num_val);
//console.log(local_num);  //error local_num is local