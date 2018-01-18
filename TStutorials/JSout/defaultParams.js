//Describing default parameters
function calDiscount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log(discount);
}
calDiscount(1000);
calDiscount(1000, 0.30);
