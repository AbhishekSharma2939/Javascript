//alert("Hello "); //one time pop msg create krta h!!.
// let name = prompt("Enter your name:"); // also a pop up msg with an input question.
// console.log(name);

// Q1->
/*
let num = prompt("Enter a number :");
if(num % 5 === 0){
    console.log(num,"is a multiply of 5");
}
else{
    console.log(num,"is invalid Number");
}
    */

//Q2 ->
 let marks = prompt("Enter the marks :");
 if(marks>=80 && marks<=100){
    console.log("A++");
 }
 else if(marks>=70 && marks<80 ){
    console.log("B++");
 }
 else if(marks>=60 && marks<70 ){
    console.log("C++");
 }
 else if(marks>=50 && marks<60 ){
    console.log("D++");
 }
 else {
    console.log("Fail");
 }