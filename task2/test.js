//WRITE AN ARRAY OF NUMBERS
const numbers =[-5,-2,-6,0,-1]

//DECLARE A VARIABLE TO CHECK FOR THE HIGHEST 
let highest = 0;

//Write a for loop
for(let i=0; i<numbers.length; i++){
    if (numbers[i] > highest){
        highest = numbers[i]
    }
} 

//Use the alert command
alert(`output: ${highest}`);
