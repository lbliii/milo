// when the right or left arrow key is pressed, go to the next or previous link

window.addEventListener('keydown', function(e) {
    var leftPage = document.querySelector('#arrow-left');
    var rightPage = document.querySelector('#arrow-right');
    var backUpPage = document.querySelector('#arrow-left-dir');
    if (e.key == 'ArrowRight') {
        this.window.location.href = rightPage.href;
    }
    if (e.key == 'ArrowLeft') {
        this.window.location.href = leftPage.href;    

        // todo: if above is null, choose backuppage
    }
});