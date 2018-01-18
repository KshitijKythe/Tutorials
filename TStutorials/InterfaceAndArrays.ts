// INTERFACE AND ARRAY
/* Interface can define both: 
*         the kind of key an array uses and
*         the type of entry it contains
*  Index can be of type number or string
*/

interface nameList{
    [index:number]:string
}

var list1:nameList = ["John","Bran"];
//var list1:nameList = ["John",2,"Bran"];  //ERROR   

/* 
interface ageList{
    [index:string]:number
}

var ages:ageList=[];
ages["John"] = 15; */
//ages[2]="nine";      //ERROR