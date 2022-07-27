function darkMode() {
   var element = document.body;
   var nav = document.getElementById("top-nav-container");
   var footer = document.getElementById("footer");
   var next = document.getElementById("next");
   var prev = document.getElementById("previous");

   var sectionHero = document.getElementById("section-hero");
   var singleHero = document.getElementById("single-hero");



   element.classList.toggle("pach-dark-mode");

   if (prev != null) {
    prev.classList.toggle("has-background-success");
    prev.classList.toggle("has-text-black");
   }
   if (next != null) {
    next.classList.toggle("has-background-success");
    next.classList.toggle("has-text-black");
   }

}