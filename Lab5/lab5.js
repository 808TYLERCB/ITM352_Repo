
// Declare Variables per Lab5.1 Instructions // 

let age= 24;
let fav_num=7;
let day_of_birth=28;
let month_of_birth=2;

// Define Calculations // 

let calc1=age + fav_num / day_of_birth * month_of_birth;
let calc2=(age + fav_num) / day_of_birth * month_of_birth;

// output calc 1 & 2 to the dom//

document.getElementById("result1").innerHTML = calc1;
document.getElementById("result2").innerHTML = calc2;


