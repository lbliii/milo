// if screen size is mobile, remove margin from the left and right of the main element. 

window.onload = function() {
     var main = document.querySelector('main');
    if (window.innerWidth < 768) {
       
        main.classList.toggle("mx-6");
        main.classList.toggle("mx-1");
    } 
    
    if (window.innerWidth > 768 && !main.classList.contains("mx-6")) {  
        main.classList.toggle("mx-6");
        main.classList.toggle("mx-1");

    }
}

window.onresize = function() {
    var main = document.querySelector('main');
    if (window.innerWidth < 768) {
        main.classList.toggle("mx-6");
        main.classList.toggle("mx-1");
    } 
    
    if (window.innerWidth > 768 && !main.classList.contains("mx-6")) {  
        main.classList.toggle("mx-6");
        main.classList.toggle("mx-1");
    }
}



