'use strict';

const arrow = document.querySelector('.button-scroll-to-top');

arrow.addEventListener('click', event=>{
    window.scrollTo(scrollX, 0);
})

window.addEventListener('scroll', function() {
    arrow.hidden = (this.scrollY < document.documentElement.clientHeight);
  });