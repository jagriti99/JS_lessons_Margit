let hoursSalary = prompt("Your hourly salary");
let hours = prompt("How many hours you work?");
let salary;
if (hours <= 7){
   console.log(salary = hoursSalary * hours);
}
else if(hours >7 && hours<=9){
    console.log(salary = ((hoursSalary * 7) + (hoursSalary* (50/100))));
}
else if(hours>9){
    console.log(salary = ((hoursSalary * 7) + (hoursSalary* 2)+(hoursSalary* (50/100))));
}