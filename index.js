function onChangeEmail() {
    toggleButtonsDisabled();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisabled();
    toggleIsPasswordErrors();
}

function login() {
    //nao esta reconhecendo o firebase
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        window.location.href = "pages/home/home.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}

function getErrorMessage(error) {
    if(error.code == "auth/user-not-found") {
        return "Usuário não encontrado";
    }
    return error.message;
}

function register() {
    showLoading();
    //window.location.href = "pages/register/register.html";
}

function isEmailValid() {
    const email = form.email().value;
    if(!email) {
        return false;
    }
    return validateEmail(email);
}

function toggleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function toggleButtonsDisabled() {
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
    const password = form.password().value;
    if(!password) {
        return false;
    }
    return true;
}

function toggleIsPasswordErrors() {
    const password= form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

const form = {
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    loginButton: () => document.getElementById('login-button'),
    password: () => document.getElementById('password'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    recoverPasswordButton: () => document.getElementById('recover-password-button')
}