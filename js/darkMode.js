const buttonDarkMode = document.querySelector('#btnDarkMode');
const body = document.querySelector('body');
const icon = document.querySelector('.fa-moon')
const link = document.querySelector('.link_header')
const mobileMenu = document.querySelector('.menu_mobile');


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

// function toggleDark() {
//     const body = document.querySelector('body');
//     const dataTheme = container.getAttribute("data-theme");
//     let theme = localStorage.getItem("data-theme");
  
//   if (theme === "light") {
//     container.setAttribute("data-theme", "dark");
//     document.getElementById("night").style.display = "block";
//     document.getElementById("light").style.display = "none";
//     localStorage.setItem("data-theme", "dark");
  
//   } else {
  
//     container.setAttribute("data-theme", "light");
//     document.getElementById("night").style.display = "none";
//     document.getElementById("light").style.display = "block";
//     localStorage.setItem("data-theme", "light");
//     }
//   }