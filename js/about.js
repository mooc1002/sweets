(() => {

//1列目
const text = document.querySelector('.text');
const pic1 = document.querySelector('#pic1');
const p1 = document.querySelector('#first-p');
const f_h3 = document.querySelector('#first-h3');

//2列目
const second = document.querySelector('.quality');
const pic2 = document.querySelector('#pic2');
const p2 = document.querySelector('#second-p');
const s_h3 = document.querySelector('#second-h3');

//3列目
const third = document.querySelector('.trust');
const pic3 = document.querySelector('#pic3');
const p3 = document.querySelector('#third-p');
const t_h3 = document.querySelector('#third-h3');



const cb = function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
           entry.target.classList.add('show')
        } 
    })
}

const io = new IntersectionObserver(cb);



//io.observe(text);
io.observe(pic1);
io.observe(p1);
io.observe(f_h3);
//２つ目
io.observe(second);
io.observe(pic2);
io.observe(p2);
io.observe(s_h3);


//3つ目
io.observe(third);
io.observe(pic3);
io.observe(p3);
io.observe(t_h3);


})();