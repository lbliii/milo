function styleTOC(){

    // Get every header in the document
    var zzz = document.getElementById('zzz');

    var pageNodes = document.getElementsByTagName('*');
    var headings = [];
    for (var i = 0; i < pageNodes.length; i++) {
        var node = pageNodes[i];
        if (node.nodeType == 1) {
            var nodeName = node.nodeName.toLowerCase();
            if (nodeName == 'h2' || nodeName == 'h3') {
                headings.push(node.id);
            }
        }
    }
    console.log(headings);

    // Create a TOC
   
    for (var i = 0; i < headings.length; i++) {
        var heading = headings[i]; 
        var li = document.createElement('li');
        var link = document.createElement('a');
        var headerNameNoDashes = heading.replace(/-/g, ' ');

        link.classList.add('tag');
        link.classList.add('mt-4')
        link.classList.add('is-inline-block')
        link.href = '#' + heading;

        link.innerHTML = '# ' + headerNameNoDashes;

        li.appendChild(link);
        zzz.appendChild(li); 
    }





    

   

}

styleTOC();