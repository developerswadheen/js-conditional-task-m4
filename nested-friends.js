const marks = 80;
const frMarks = 30;

if(marks >= 80 && marks <=100){
    if(frMarks >= 80 && frMarks <=100){
        console.log('go to lunch');
    }
    else if(frMarks >= 60 && frMarks <=79){
        console.log('good luck next time');
    }
    else if(frMarks >= 40 && frMarks <=59){
        console.log('keep your friends message unseen');
    }
    else if(frMarks < 40){
        console.log('you are block');
    }
}
else{
    console.log('ami onk kosto pailam!')
}