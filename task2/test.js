const numbers =[-5,-2,-6,0,-1]

let largest = 0

for(let i=0; i<numbers.length; i++){
    if (numbers[i] > largest) {
        largest = array[i]
    }
}
alert(`output: ${largest}`);