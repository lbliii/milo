let activeButtons = new Set();
let activeFilters = new Set();


function Filter(filter, el){

    activeFilters.add(filter);
    activeButtons.add(el);

    el.classList.toggle('is-black')

    revealResults()


}

function revealResults(){


}

