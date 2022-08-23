let num, confirm;
let count=0;
let sum = 0;
while (confirm !='n'){
    num = Number(prompt('Enter number'));
    confirm =prompt('Do you want to contunue giving numbers? (y/n)');
    sum = sum + num;
    count ++;

}
console.log('Average is ',sum/count);