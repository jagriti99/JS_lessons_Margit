let num;
let sum=0;
let count= 0;
 while (num != 0){
    num = Number(prompt('Enter a number'));
    sum+=num;
    count++;
 }
 console.log(sum / count -1);