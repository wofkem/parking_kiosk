window.onload = function(){
    const infodiv = document.getElementById('info');
    let car_num = localStorage.getItem("car_num");
    let phone_num = localStorage.getItem("phone_num");

    const car_num_div = document.getElementById('car_num');
    car_num_div.innerHTML += car_num 
    const phone_num_div = document.getElementById('phone_num');
    phone_num_div.innerHTML += phone_num 
}