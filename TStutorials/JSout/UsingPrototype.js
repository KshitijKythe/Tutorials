/* -------------------------------------------------------------------------------------------

        PROTOTYPE:
        A static property of the Number object. Use the prototype
        property to assign new properties and methods to the Number
        object in the current document
 ------------------------------------------------------------------------------------------- */
function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, "Kshitij");
employee.prototype.email = "Kshitij@emc.com";
console.log("Employee's name: " + emp.name);
console.log("Employee's Id: " + emp.id);
console.log("Employee's Email: " + emp.email);
emp.email = "something@xyz.com";
console.log("The email has been changed to: " + emp.email);
/* ---------------------------------------------------------------------------------------------- */ 
