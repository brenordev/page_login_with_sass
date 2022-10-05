const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu_mobile');

    menuButton.addEventListener('click', function(){
        header.classList.toggle('activeMenu');
        console.log('Click menu');
    })