function discountfun(a , b){
    discountvalue = (a * b)/100 ;
    return discountvalue;
}
  
let first_value = 120;
let discountable_value = 18;

total_discount_value = discountfun(first_value , discountable_value );

document.getElementById('bucket').innerHTML = total_discount_value;
