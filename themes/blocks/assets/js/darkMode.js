function darkMode() {

   var element = document.body;
   var directory = document.getElementById('directory');
   var button = document.getElementById("dark-mode-button");
   var backButton = document.getElementById("back-arrow-left");
   var glossary = document.getElementById("glossary");





   // Toggle Darkmode for the directory 
   if (directory){ 
    for (var i = 0; i < directory.children.length; i++) {
        for (var j = 0; j < directory.children[i].children.length; j++) {
            directory.children[i].children[j].classList.toggle("is-black");
        }
    }
   }

   // Toggle Darkmode for the glossary
    if (glossary){
        for (var i = 0; i < glossary.children.length; i++) {
            
            for (var j = 0; j < glossary.children[i].children.length; j++) {

                const element = glossary.children[i].children[j];

                if (element.classList.contains("glossary-term")) {
                    element.classList.toggle("has-background-info");
                    element.classList.toggle("has-background-black");
                } else {

                    element.classList.toggle("has-text-white");
                    element.classList.toggle("has-background-black");

                }

            }
        }
    }

   // Toggle Darkmode for the body element 

   element.classList.toggle("pach-dark-mode");
   backButton.classList.toggle("is-primary");
   backButton.classList.toggle("is-white");


   // Toggle Darkmode for Darkmode Button
   if (button.classList.contains("is-black")) {
    button.classList.remove("is-black");
    button.innerText = "☀️";
   } else {
    button.classList.add("is-black");
    button.innerText = "🌙";
   }
    

   // Store the value in local storage
    if (element.classList.contains("pach-dark-mode")) {
        localStorage.setItem("pach-dark-mode", "true");
    }
    else {
        localStorage.setItem("pach-dark-mode", "false");
    }

}

// Check if the user has previously selected dark mode
if (localStorage.getItem("pach-dark-mode") == "true") {
    darkMode();
}
