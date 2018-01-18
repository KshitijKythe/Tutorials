var val;
val = 12;
console.log("Numeric value of val is: " + val);
val = "This is a string";
console.log("String value of val is: " + val);
/* Union Type and Function Params */
function disp(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        for (var i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
console.log("Printing singular value:");
disp("Mark");
console.log("Printing values from Array:");
disp(new Array("Shelley", "Tom"));
//disp(["Shelley","Tom"]);
/* Union Type and Arrays */
var arr;
arr = [1, 2, 3];
console.log("Numeric Array:");
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr = ["Mark", "Tom", "Jake"];
console.log("String Array:");
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
