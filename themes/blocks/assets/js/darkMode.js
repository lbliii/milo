function darkMode() {

   var element = document.body;
   var nav = document.getElementById("top-nav-container");
   var footer = document.getElementById("footer");
   var next = document.getElementById("next");
   var prev = document.getElementById("previous");
   var button = document.getElementById("dark-mode-button");

   // Toggle Darkmode for the body element 
   element.classList.toggle("pach-dark-mode");

   // Toggle Darkmode for NextPrev Feature
   if (prev != null) {
    prev.classList.toggle("has-background-success");
    prev.classList.toggle("has-text-black");
   }
   if (next != null) {
    next.classList.toggle("has-background-success");
    next.classList.toggle("has-text-black");
   }

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
