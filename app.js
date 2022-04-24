'use strict'
for (let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    var rating = parseInt(localStorage.getItem(key)) + 1;
    var li = "<li><a>" + key + " <input type='button' value='Upvote' id='uv' /> <input type='button' value='Downvote' id='dv' /> " + parseInt(localStorage.getItem(key)) + "</a></li>";
    document.getElementById("list").insertAdjacentHTML('afterend', li);
    document.getElementById("uv").onclick = function() {
        var rating = parseInt(localStorage.getItem(key)) + 1;
        localStorage.setItem(key,rating);
        console.log("UP+ " +  localStorage.getItem(key))
        window.location.reload();
    }
    document.getElementById("dv").onclick = function() {
        var rating = parseInt(localStorage.getItem(key)) - 1;
        localStorage.setItem(key, rating);
        console.log("DV- " +  localStorage.getItem(key))
        window.location.reload();
    }  
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
        var li = "<li><a>" + text + "  <input type='button' value='Upvote' id='uv' /> <input type='button' value='Downvote' id='dv' />" + parseInt(localStorage.getItem(text)) + "</a></li>";
        document.getElementById("list").insertAdjacentHTML('afterend', li);
        document.getElementById("input").value = ""; // clear the value
        localStorage.setItem(text, parseInt(0)); //add value to local storage
        window.location.reload();  
        document.getElementById("uv").onclick = function() {
            var rating = parseInt(localStorage.getItem(text)) + 1;
            localStorage.setItem(text,rating);
            console.log("UP+ " +  localStorage.getItem(text))
            window.location.reload();
        }
        document.getElementById("dv").onclick = function() {
            var rating = parseInt(localStorage.getItem(text)) - 1;
            localStorage.setItem(text, rating);
            console.log("DV- " +  localStorage.getItem(text))
            window.location.reload();
        }            
    }
  }

  document.getElementById("clear").onclick = function() {
    localStorage.clear();    //clear list
    document.getElementById("list").innerHTML = "";
    window.location.reload();
    }





    
  