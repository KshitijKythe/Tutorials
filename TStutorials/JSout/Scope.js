var global_num = 12; //global variable
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; //class variable
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14;
    };
    Numbers.sval = 10; //static variable
    return Numbers;
}());
console.log("Global num:" + global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log(obj.num_val);
//console.log(local_num);  //error local_num is local 
