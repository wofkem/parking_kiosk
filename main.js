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