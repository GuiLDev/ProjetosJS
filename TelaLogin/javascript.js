const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();

});

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
    
    if (usernameValue === ''){
        setErrorFor(username, 'O nome de usuário é obrigatório.');
    }else{
        setSucessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'O email é obrigatório.');
    }else if(!checkEmail(emailValue)){
        setErrorFor(email, 'Por favor, insira um email válido.');
    }else{
        setSucessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'A senha é obrigatória.');
    }else if(passwordValue.length < 7){
        setErrorFor(password, 'A senha precisa ter no mínimo 7 caracteres.');
    }else{
        setSucessFor(password);
    }

    if(passwordConfirmationValue === ''){
        setErrorFor(passwordConfirmation, 'A confirmação de senha é obrigatória.');
    }else if(passwordConfirmationValue != passwordValue){
        setErrorFor(passwordConfirmation, 'As senhas não batem.');
    }else{
        setSucessFor(passwordConfirmation);
    }


    const formControl = form.querySelectorAll('.form-control')
    const formIsValid = [...formControl].every((formControl) =>{
        return (formControl.className === 'form-control sucess');
    });

    if(formIsValid){
        console.log('o formulario está 100% valido.')
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //adicionar a mensagem de erro
    small.innerText = message;

    //adicionar a classe de erro
    formControl.className = 'form-control error';

}

function setSucessFor(input){
    const formControl = input.parentElement;
    //adicionar a classe de sucesso
    formControl.className = 'form-control sucess';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
