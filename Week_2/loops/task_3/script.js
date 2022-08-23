let km;
let time;
while ( km != 0){
    km =prompt("Enter distance");
   

        if(km ==0)
        {
            console.log('distance is 0')
            break;
        }
        time = prompt("Enter time");
        let avg =km/time;
        console.log('average is: ', avg + 'km/h');

}


