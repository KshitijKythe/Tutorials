//Describing default parameters

function calDiscount(price:number,rate:number=0.50){
    var discount:number = price * rate;
    console.log(discount);
}

calDiscount(1000);
calDiscount(1000,0.30);