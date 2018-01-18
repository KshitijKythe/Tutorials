var alphas = ["1", "2", "3", "4"];
for (var i in alphas) {
    //   console.log(i);
    console.log(alphas[i]);
}
/*  ARRAY OBJECT
 *  An array can also be created using the Array object. The Array constructor can be passed
 *              * A numeric value that represents the size of the array or
 *              * A list of comma separated values
*/
console.log("****************");
var arr = new Array(4);
for (var j = 0; j < arr.length; j++) {
    arr[j] = j * 2;
    console.log(arr[j]);
}
console.log("****************");
/* Array Constructor accepts comma separated values */
var names = new Array("Mary", "Tom", "Jack", "Jill");
for (j = 0; j < names.length; j++) {
    console.log(names[j]);
}
/* ARRAY DESTRUCTION */
var dArray = [2, 3];
var x = dArray[0], y = dArray[1];
console.log("Array Destruction:");
console.log(x);
console.log(y);
/* 2-D Arrays */
console.log("Multi-dimensional arrays");
var multi = [[1, 2, 3], [23, 24, 25]];
console.log(multi[0][0]);
console.log(multi[0][1]);
console.log(multi[0][2]);
console.log(multi[1][0]);
console.log(multi[1][1]);
console.log(multi[1][2]);
/* passing Arrays to Functions */
console.log("Passing arrays to functions:");
var xNames = new Array("Mary", "Tom", "Jack", "Jill");
function disp(arr_names) {
    for (var i = 0; i < arr_names.length; i++) {
        console.log(arr_names[i]);
    }
}
disp(xNames);
/* Function returning an Array */
console.log("Function returning an Array:");
function returner() {
    return new Array("Mary", "Tom", "Jack", "Jill");
}
var rNames = returner();
for (var k in rNames) {
    console.log(rNames[k]);
}
