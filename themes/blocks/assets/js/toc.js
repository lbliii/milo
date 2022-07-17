function styleTOC(){

    var toc = document.getElementById('TableOfContents');
    var ul = document.getElementById('TableOfContents').children[0]
    var anchors = ul.children
    var links = anchors.children 


    ul.classList.add('tags')
    ul.classList.add('mt-3')
    ul.classList.add('is-flex-direction-column')
    ul.classList.add('is-align-items-start')
    
    console.log(anchors)

    for(var i = 0; i < anchors.length; i++){
        anchors[i].classList.add('tag')
        
    }
    

}

styleTOC() 