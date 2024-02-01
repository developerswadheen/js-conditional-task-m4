// let BMI = 19;

const weight = 52;
const height = 1.83736;

let BMI = weight / height**2;

if(BMI < 18.5) {
    console.log('underweight');
}
else if( BMI >= 18.5 && BMI <=24.9 ){
   console.log(' you are normal')
   console.log(BMI);
}
else if(BMI >=25 && BMI <= 29.9 ){
    console.log('you are overweight')
}
else{
    console.log('you are obese.')
}