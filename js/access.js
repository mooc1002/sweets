(() => {


const pic = [
    'images/cafe.jpg',
    'images/wooden.jpg',
    'images/showcase.jpg'
]


const img = document.querySelector('img');



img.src = pic[0]

let count = 0;

let change = function() {
    img.src = pic[count];
    count++;

    img.classList.add('over');

    if(count >= pic.length){
        count = 0;
    }
}

let hidden = function(){
    img.classList.remove('over');
}


setInterval(change, 3000)




})();







