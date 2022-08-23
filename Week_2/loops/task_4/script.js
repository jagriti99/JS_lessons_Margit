let even = 0;

for(let i=0; i<= 5; i++){
    const num =Number(prompt(" enter a number"));
    if(num % 2 == 0){
        even++;
    }
}
console.log('There was ', even , 'even numbers');