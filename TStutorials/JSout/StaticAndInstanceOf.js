//STATIC KEYWORD and instanceof
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("The value of num is: " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12;
StaticMem.disp();
var obj = new StaticMem();
if (obj instanceof StaticMem) {
    console.log("True");
}
else {
    console.log("False");
}
