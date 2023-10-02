function validateFields() {
    // pegar o valor do campo email
    // verificar se este valor não é vazio e se o email e valido 
    // se verdadeiro, habilito botao de recuperar senha
    // se falso, então desabilitar o botão de recuperar senha
    const emailValid = isEmailValid();
    document.getElementById('recover-password-button').value = !emailValid; 
    
    const passwordValid = isPasswordValid();
    document.getElementById('login-buton').disable = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email){
        return false;
    } 
        return validateEmail(email);
}

function isPasswordValid() {
    const password = document.getElementById('password').value;
    if(!password){
        return false;
    }
    return true;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}