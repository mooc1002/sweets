(() => {

const menu = document.querySelector('.sp-nav');
const bar = document.querySelectorAll('span');
const nav = document.querySelector('nav');

menu.addEventListener('click', function() {
    nav.classList.toggle('open');
    
    for (let i = 0; i < bar.length; i++) {
        bar[i].classList.toggle('open');
        
    }
})

})();