let num;
let sum=0;
let count= 0;
for(let i = 1 ;i <= 5; i++ ){
    num = Number(prompt('Enter a number'));
    sum+=num;
    count++;
}

let average = sum / count;
 console.log('sum is: ',sum, ' and count is: ', count, ' and average: ', average);



 /*let sum =0;
 let counter=0;
 do {
    let input = Number(prompt('Enter a number'));
    sum+=input;
    counter++;
 }while(counter !==5);
 console.log ('Average was  ${sum/counter}');*/
 
