var paginator = document.getElementById('paginator');
paginator.children[0].classList.toggle('is-hidden');

currentPager = paginator.children[0]

function revealPage(pager){
   lastVisiblePager = currentPager 
   lastVisiblePager.classList.toggle('is-hidden');
   console.log(pager)
   currentPager = document.getElementById(pager)
   currentPager.classList.toggle('is-hidden');

}