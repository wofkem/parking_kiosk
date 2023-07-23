window.onload = function(){
      const numdiv = document.getElementById('carNumber');
      let num = localStorage.getItem("car_num");
      let newSpan = document.createElement('span');
      newSpan.innerHTML = num;
      numdiv.appendChild(newSpan);
}

function appendNum(num) {
      const element = document.getElementById('phonenumber');
      const newSpan = document.createElement('span');
      const content = document.createTextNode(num.value);

      if (element.childElementCount==5){
            const Hyphen = document.createTextNode('-');
            newSpan.appendChild(Hyphen);
            element.appendChild(newSpan);
      }
      if (element.childElementCount<=8){
            newSpan.appendChild(content);
            element.appendChild(newSpan);
      }
}

function deleteNum(){
      const element = document.getElementById('phonenumber');
      if (element.childElementCount!=1){
            element.removeChild(element.lastElementChild);
      }
}


function confirmnum() {
      const element = document.getElementById('phonenumber');
      const listnum = document.getElementById('phonenumber').childNodes;
      if(element.childElementCount!=9){
            alert("전화번호 8자리를 입력해주세요.")
      }
      else{
            let phonenum = ''
            for(i = 0; i <= 8; i++){
                  let str = listnum[i].innerHTML
                  phonenum += str
            }
            if(confirm(phonenum+" 맞습니까?")){
                  localStorage.setItem("phone_num",phonenum);
                  location.href = 'main.html';
            }
      }
}
