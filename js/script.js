const errorMessage = document.querySelector('.error_email');
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const btnLogin = document.querySelector('.btn_sign_in');

btnLogin.addEventListener('click', (e)=>{
    e.preventDefault()
    const email = inputEmail.value;
    const password = inputPassword.value;
    if(email && password == ""){
        errorMessage.innerText = "Email e ou senha não preenchido"
    }
})