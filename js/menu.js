(() => {

    const list = document.querySelectorAll('.menu-item');
    const lineup = document.querySelectorAll('.menu-lineup');

   const init = () => {
    list[0].classList.add('active');
    lineup[0].classList.add('show');
   } 

   init();
  


    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function() {
            if(list[i] == list[0]) {
                choco();
            } else if(list[i] == list[1]){
                ice();
            } else if(list[i] == list[2]){
                tarte();
            }
        })
                
    }


    function choco() {
        list[0].classList.add('active');
        lineup[0].classList.add('show');

        list[1].classList.remove('active');
        lineup[1].classList.remove('show');

        list[2].classList.remove('active');
        lineup[2].classList.remove('show');
    }

    function ice() {
        list[1].classList.add('active');
        lineup[1].classList.add('show');

        list[0].classList.remove('active');
        lineup[0].classList.remove('show');

        list[2].classList.remove('active');
        lineup[2].classList.remove('show');
    }

    function tarte() {
        list[2].classList.add('active');
        lineup[2].classList.add('show');

        list[1].classList.remove('active');
        lineup[1].classList.remove('show');

        list[0].classList.remove('active');
        lineup[0].classList.remove('show');
    }

})();


