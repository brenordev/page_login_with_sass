const inputEmail = document.querySelector('#inputEmail');
const bntClearInput = document.querySelector('#clearInput');

bntClearInput.addEventListener('click', () =>{
   inputEmail.forEach(inputEmail => inputEmail.value = '');
   console.log('click')
});
