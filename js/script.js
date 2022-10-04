const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const btnLogin = document.querySelector('.btn_sign_in');

btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    const email = inputEmail.value;
    const password = inputPassword.value;
    if (email === '') {
        inputEmail.classList.toggle('errorInput');
        console.log('Era o ; mesmo')

    }
    if (password === '') {
        inputPassword.classList.toggle('errorInput')
        console.log('Senha vazio')
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


