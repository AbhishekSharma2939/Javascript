 /*
 // Arithmatic Opertor

// let a =10 ;
// let b = 5;
// console.log(a+b)
// console.log(a-b)
// console.log(a/b)
// console.log(a*b)
// console.log(a%b)
// console.log(a**b)

//unary operator -> 1. Increment  2. Decrement

let a =5;
console.log(a++); //5
console.log(a)  //6

//Assingment Operator
let b =4;
// b+= 1;
// b**=2;
b%=3;
console.log(b)

//Comparison Operator

let c = 5;
// let d = 6;
let d = "5";
// console.log(c==d); //true-> ye sirf value dekhega kuki vo string s number m convert hogai.
console.log(c===d); // false ->triple equal data type b check krta yha string. 

// Logical Operators -> 

//inka b true or false m answer aata h.

 //AND(&&) ye true tbi dega tbi dono true honge. mtlb multiply wala.
  let f = 4;
  let g = 2;
  
  //let cond1 = f>g;
  //let cond2 = f === 4;
   //console.log(cond1 && cond2);

// OR(||) ye true tbi h jb dono m sy koi ek b true hoga.lekin FF pr false rhega.

let cond1 = f<g;
let cond2 = f ===2;
console.log(cond1 || cond2);  //pipe symbol(||)

//NOT(!) ulta krne k kaam aata h.
 
console.log(!(f<g));  */

// Conditional Statement 
         
           //IF

// EX1->
// let a = 21;
//  if(a>=18){
//     console.log("You are eligible for vote");
//  }
//  if (a<18){
//     console.log("Not eligible");
//  }

//EX2->
// let mode = "Dark";
// let color;
// if(mode=== "Dark"){
//     color ="Black";
// }
// if(mode === "Bright"){
//     color="White";
// }
// console.log(color);  

            // IF-ELSE
// EX1->

// let a = 21;
// if(a>=18){
//     console.log("Vote");
// }
// else{
//     console.log("not eligible");
// }

// EX2->

let num = 20;
if(num%2===0){
    console.log("Even");
}
else{
    console.log("False");
}

            // else-if
 
let mode = "Green";
let color;
 if(mode === "Dark"){
    color="Black";
 }
 else if(mode === "Blue"){
    color ="Blue";
 }
 else if( mode== "Yellowish"){
    color = "Yellow";
 }
 else{
    color = "White";
 }
 console.log(color);

                //Ternary Operator 

 let age = 21;
 let result = age > 18 ? "adult":"not adult"; //This is the syntex of ternary oprtr. We can also say it compact if-else.
  // we use it in small problem.and in big problem we prefer if-else.
 console.log(result);

                //Switch statements

const expr = "Apple";
switch(expr){
    case "banana":
        console.log("Banana good for health");
        break;
    case "Apple":
        console.log("Eating one apple daily is good");
        break;
    case "Papayas":
        console.log("This is Good for Tummy");
        break;
    default:
        console.log("Sorry there is no such type of food");        
}