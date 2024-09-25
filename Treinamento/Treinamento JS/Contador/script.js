const botaoIncremento = document.querySelector('.incremento');
const botaoDecremento = document.querySelector('.decremento');
const numeroContador = document.querySelector('.contador');
const botaoReset = document.querySelector('.reiniciar')
const mensagemAlerta = document.querySelector('.mensagem-limite')

let contador = 0;
botaoDecremento.disabled = true;
botaoReset.disabled = true;
mudarcorNumeros();

function atualizarBotões(){
    botaoIncremento.disabled = contador === 10;
    botaoDecremento.disabled = contador === 0;
};


function mudarcorNumeros(){
    if (contador < 1){
        numeroContador.style.color = "red";
    }else{
        numeroContador.style.color = "green";
    }
};


function limiteMensagem(){
    if(contador === 10){
        mensagemAlerta.textContent = "Número limite atingido.";
        mensagemAlerta.style.color = 'red';
    }else{
        mensagemAlerta.textContent = "";
    }
    
};




botaoReset.addEventListener('click', function(){
    contador = 0;
    numeroContador.textContent = `Número do contador: ${contador}`;
    botaoReset.disabled = true;
    mudarcorNumeros();
    atualizarBotões();
    limiteMensagem();
});


botaoIncremento.addEventListener('click', function(){
    contador++; 
    numeroContador.textContent = `Número do contador: ${contador}`;
    if(contador < 10){
        botaoReset.disabled = true;
    }else{
        botaoReset.disabled = false;
    }
    atualizarBotões();
    mudarcorNumeros();
    limiteMensagem();
});


botaoDecremento.addEventListener('click', function(){
    contador--; 
    numeroContador.textContent = `Número do contador: ${contador}`;
    if(contador < 10){
        botaoReset.disabled = true;
    }else{
        botaoReset.disabled = false;
    }
    atualizarBotões();
    mudarcorNumeros();
    limiteMensagem();
});
