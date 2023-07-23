let arr = new Array();
function addData(){
    let carNumber = document.getElementById("carNumber").value
    
    if(!carNumber)
        alert("값을 입력해주세요.");
    else{
        localStorage.setItem("car_num",carNumber);
        document.getElementById("carNumber").value = '';
        location.href = 'phonenumber.html';
    }
}
