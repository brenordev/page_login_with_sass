const buttonDarkMode = document.querySelector('#btnDarkMode');
const body = document.querySelector('body');
const icon = document.querySelector('.fa-moon')
const link = document.querySelector('.link_header')


buttonDarkMode.addEventListener('click', function(e) {
    body.classList.toggle('dark-mode-on');
    if (body.classList == 'dark-mode-on'){
        icon.classList.toggle('fa-moon');
        icon.classList.add('fa-sun');
    
    }
    else{
        icon.classList.toggle('fa-moon')
    }
})