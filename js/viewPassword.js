const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#inputPassword");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("fa-eye");

    
});



    

