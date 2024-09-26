const incluirLowerCases = document.querySelector('.lowerCases');
const incluirUpperCases = document.querySelector('.upperCases');
const incluirSimbolos = document.querySelector('.simbolos');
const passButton = document.querySelector('.passButton');
const incluirNumeros = document.querySelector('.numeros');
const passField = document.getElementById('passField')



//Socorro deus


function gerarSenha(){
    const alertaLength = document.getElementById('alertaLength');
    alertaLength.style.color = 'red';
    alertaLength.style.display = 'none';

    const comprimento = document.getElementById('tamanho').value;
    const comprimentoInput = parseInt(comprimento, 10);
    if(isNaN(comprimentoInput) || comprimentoInput < 4 || comprimentoInput > 32){
        alertaLength.textContent = 'Porfavor insira um comprimento valido (Min 4, Max 32)';
        alertaLength.style.display = 'block';
        return;
    }
    
    alertaLength.style.display = 'none';
    
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';


    let caracteres = '';

    if(incluirUpperCases.checked) caracteres += letrasMaiusculas;
    if(incluirLowerCases.checked) caracteres += letrasMinusculas;
    if(incluirNumeros.checked) caracteres += numeros;
    if(incluirSimbolos.checked) caracteres += simbolos;

    if (caracteres === '') {
        alert('Por favor, selecione pelo menos uma opção de caractere!');
        return;
    }
    
    let senhaGerada = '';
    for (let i = 0; i < comprimento; i++){
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senhaGerada += caracteres[indiceAleatorio];
    }

    passField.value = senhaGerada;

}


function verSenha(){
    const eyeOpen = document.getElementById('eyeOpen');
    const eyeHidden = document.getElementById('eyeHidden');

    eyeOpen.addEventListener('click', function(){
            passField.type = 'text';
            eyeOpen.style.display = 'none';
            eyeHidden.style.display = 'block';
    });

    eyeHidden.addEventListener('click', function() {
        passField.type = 'password';
        eyeOpen.style.display = 'block';
        eyeHidden.style.display = 'none';
    });

}

passButton.addEventListener('click', gerarSenha);
verSenha();