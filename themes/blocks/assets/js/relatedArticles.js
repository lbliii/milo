// when the button with the id "see-related" is clicked, toggle the class "is-hidden" on the div with the id "related-articles"

    document.getElementById('see-related').addEventListener('click', function() {
        document.getElementById('zzz').classList.toggle('is-hidden');
        document.getElementById('related-articles').classList.toggle('is-hidden');

    } , false); 

