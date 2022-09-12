function darkMode() {

    var body = document.getElementsByTagName('body')[0];

    // Toggle dark mode for html element 
    body.classList.toggle("black");

   // Store the current theme in local storage
    localStorage.setItem("theme-dark-mode", body.classList.contains("black"));

}

// Check if the user has previously selected dark mode
if (localStorage.getItem("theme-dark-mode") == "true") {
    darkMode();
}
