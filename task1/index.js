//Write a for loop
for (i=0; i<=15; i++){
    if(i%2 === 0){
        const newH1 = document.createElement("h1")
        newH1.innerHTML = `${i} is even`;
        document.body.appendChild(newH1)
    }
    //Second conditional check
    if( (i%2) === 1){
        const newH1 = document.createElement("h1")
        newH1.innerHTML = `${i} is odd`;
        document.body.appendChild(newH1)
    }
};


