let price = 800;
let age = 70;
const isStudent = true;

if(age < 10){
    price = 0;
    // console.log(price)
}
else if(isStudent && age <= 30){
    const discount = price * 50 / 100;
    price = price - discount;
}
else if( age >= 60 ) {
    const discount = price * 15 / 100;
    price = price - discount;
}

else{
    price;
}
console.log(price);