function styleTOC(){

    // Get every header in the document
    var zzz = document.getElementById('zzz');

    var pageNodes = document.getElementsByTagName('*');
    var headings = [];
    var toc = []

    for (var i = 0; i < pageNodes.length; i++) {
        var node = pageNodes[i];
        if (node.nodeType == 1) {
            var nodeName = node.nodeName.toLowerCase();
            if (nodeName == 'h2' || nodeName == 'h3') {
                headings.push(node);
            
            }
        }
    }

    // Create a TOC from the headings array and add it to the page as a child of the zzz element
   
    for (var i = 0; i < headings.length; i++) {
        var heading = headings[i].nodeName
        var headingText = headings[i].innerText.substring(1);

        var li = document.createElement('li');
        var link = document.createElement('a');

        link.href = '#' + headings[i].id;
        link.role = headings[i].id;

        if (headingText.length > 50) {
            link.innerText = '# ' + headingText.substring(0, 30) + '...';
        } else {
             link.innerText = '# ' + headingText;
        }
        link.classList.add('tag');
        link.classList.add('mt-3')
        if (heading == 'H3') {
            link.classList.add('is-white');
            link.classList.add('ml-1')
        }

        li.appendChild(link);
        toc.push(link);
        zzz.appendChild(li);
    }



// if scrolls past a header, add is-medium class to the header and remove it from the previous header
    window.addEventListener('scroll', function() {
        var prevHeader = null; 
        var activeHeader = new Set() 
        for (var i = 0; i < headings.length; i++) {
            if (window.scrollY > headings[i].offsetTop - 100) {
                activeHeader = headings[i];
                if (activeHeader.id == toc[i].role) {
                    toc[i].classList.add('is-medium');
                    console.log(toc[i].role)
                } 
            } 
        }
        for (var i =0; i < toc.length; i++) {
            if (toc[i].classList.contains('is-medium') && toc[i].role != activeHeader.id) {
                toc[i].classList.remove('is-medium');
            }
        }
    });
}



styleTOC();