'use strict'
for (let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    var li = "<li><a>" + key + "</a></li>";
    document.getElementById("list").insertAdjacentHTML('afterend', li);
  }
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {    
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

});

document.getElementById("add").onclick = function() {
    var text = document.getElementById("input").value;
    if(text == ""){
    }
    else{
        var li = "<li><a>" + text + "</a></li>";
        document.getElementById("list").insertAdjacentHTML('afterend', li);
        document.getElementById("input").value = ""; // clear the value
        localStorage.setItem(text, 'Value'); //add value to local storage        
    }
  }

  document.getElementById("clear").onclick = function() {
    localStorage.clear();    //clear list
    document.getElementById("list").innerHTML = "";
    }
  