const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const btnLogin = document.querySelector('.btn_sign_in');

    btnLogin.addEventListener('click', (e)=>{
        e.preventDefault()    
        const email = inputEmail;
        const password = inputPassword.value;
            if(email === '');{
                inputEmail.classList.add('errorInput');
                console.log('Email vazio')

            }
            if(password === ''){
                inputPassword.classList.add('errorInput')
                console.log('Senha vazio')
            }
            }
    );
