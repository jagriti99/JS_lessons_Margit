let num = '';
let last = 98;
for (let i=2; i<=100; i+=2){
    num += ' ' + i + '';
    num += ' ' + last + '';
    last -=2;
    
    }
console.log(num);