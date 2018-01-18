//Describing rest parameters

function addNumbers(...nums:number[]){
    var sum:number=0;
    for(var i:number=0;i<nums.length;i++){
        sum+=nums[i];
    }
    console.log("Sum is:",sum);
}

addNumbers(1,2,3);
addNumbers(10,10,10,10,10);