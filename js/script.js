const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const btnLogin = document.querySelector('.btn_sign_in');

btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    const email = inputEmail.value;
    const password = inputPassword.value;
    if (email === '') {
        inputEmail.classList.add('errorInput');
    }
    if (password === '') {
        inputPassword.classList.add('errorInput')
    }
    if (email && password != '') {
        inputEmail.classList.remove('errorInput');
        inputPassword.classList.remove('errorInput')

    }

    function inputClickFill() {

        inputEmail.addEventListener('click', (e) => {
            e.preventDefault()
            if (inputEmail.classList === 'errorInput') {
                console.log('Remover class errorInput');
            }
            inputEmail.classList.add = '';
        })


    }


}

);


