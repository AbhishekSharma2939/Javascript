//Q1
/*
console.log("Even Numbers from 0-100 are:");
for(let i=0 ; i<=100 ; i++){
    if(i % 2 === 0){    // odd no. liye cond. ye rhti ->(i % 2 !== 0).
        console.log(i);
    } 
}
    */

//Q2
let gameNum = 22;
let userNum = prompt("Enter a number : ");

while(gameNum != userNum){
 userNum = prompt("You entered a wrong Number,Enter a valid number : ");
}
console.log("Congrats!! You Won the Game.");
