            // For Loop

// for(let i=1; i<=5 ; i++){
//     console.log("Jai Ganesh Ji");
// }

/* 
//Calculate sum 1 to 5.

let sum =0;
for(let i=1;i<=5;i++){
    sum+= i;
}  
console.log("Sum is :" ,sum); 
*/ 

                //While Loop
/*
let i = 1;  // phle hi initialise krna hota h .
while(i<=10){  //stoping condition h.
    console.log("Jai Ganesh Ji");
    i++; // updation cond. ko brasis m dete h while loop m.
}
    */

   /*
                //do-while loop

//let i=20; //jb i=20 hoga to niche ki cond. k acc. ye sirf ek bar hi print hoga.
let i = 1;
do{
    console.log("Jai Ganesh Ji");
    i++;
}while(i<=10)
*/

                //Special loop -> for-of And for-in
/*
let str = "Abhishek Sharma";
count =0;
for(let i of str){   // ye syntax h for-of ko likhne ka.Or ye sirf string or array k liye use krte h.
    console.log(i); //ismy hume koi b cond.nhi deni hoti sb apne aap krta h.
    count++;
}
console.log(count);
*/

        //for-in loop -> ye objects k liye use kia jaata h .
         
let car = {             // (for-in)issy hum key-value pair ko access kr skte h !
    name : "Tata",
    model : "Safari",
    color : "Gallactic saphire",
    price : 2549000,
    isDeliver : false,
};
for(let i in car){
    console.log(i,":",car[i]);
}

