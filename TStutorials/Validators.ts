
namespace Validation{

    export interface StringValidator{
        isAcceptable(s:string):boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator{
        isAcceptable(s:string):boolean{
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator{
        isAcceptable(s:string):boolean{
            return s.length == 5 && numberRegexp.test(s);
        }
    }
}
//Some samples to try
let strings = ["Hello", "98052", "101"];

//Validators to use
let validators:{[s:string]:Validation.StringValidator;} = {};

validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

for(let s of strings){
    for(let name in validators){
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${s}'${ isMatch? "matches" : "does not match"} '${name}'.`);
    }
}
