/* ------------------------------------------------------------------------------------------- */
console.log("TypeScript Number properties:");
console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE);
console.log("Minimum value that a number variable can hold: " + Number.MIN_VALUE);
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY);
console.log("Value of Positive Infinity: " + Number.POSITIVE_INFINITY);
/* -------------------------------------------------------------------------------------------
Number.NaN
 ------------------------------------------------------------------------------------------- */
var month = 0;
if (month <= 0 || month > 12) {
    month = Number.NaN;
    console.log("Month is: " + month);
}
else {
    console.log("Value accepted...");
}
