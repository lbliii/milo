let activeButtons = new Set();
let activeFilters = new Set();
let activeTags = new Set()

function Filter(filter, el){
    activeButtons.add(el)
    if (el.classList.contains('is-black') ){
        activeFilters.delete(filter);
    }
    else{
        activeFilters.add(filter);
    }
    el.classList.toggle('is-black')

    revealResults()
    console.log(activeFilters)

}

function revealResults(){
    list = document.getElementById('potentialResults').children 

    for (let i = 0; i < list.length; i++){
        let tags = list[i].getAttribute('data-tags').split(' ')
        // if any tag matches the active filters, show the result

        tags.forEach(tag => {
            if (activeFilters.has(tag)){
                list[i].classList.remove('is-hidden')
            }
        })
        
    }


}

