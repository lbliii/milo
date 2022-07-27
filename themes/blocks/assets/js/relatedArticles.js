// toggles the TOC (id 'zzz') with the related articles (id 'related-articles')

    document.getElementById('see-related').addEventListener('click', function() {
        document.getElementById('zzz').classList.toggle('is-hidden');
        document.getElementById('related-articles').classList.toggle('is-hidden');

    } , false); 

