const botaoIncremento = document.querySelector('.incremento');
const botaoDecremento = document.querySelector('.decremento');
const numeroContador = document.querySelector('.contador');

let contador = 0;
botaoDecremento.disabled = true;

function atualizarBotões(){
    botaoIncremento.disabled = contador === 10;
    botaoDecremento.disabled = contador === 0;
}


function mudarcorNumeros(){
    if (contador < 1){
        numeroContador.style.color = "red"
    }else{
        numeroContador.style.color = "green"
    }
}

mudarcorNumeros();

botaoIncremento.addEventListener('click', function(){
    contador++; 
    numeroContador.textContent = `Número do contador: ${contador}`;
    atualizarBotões();
    mudarcorNumeros();
});


botaoDecremento.addEventListener('click', function(){
    contador--; 
    numeroContador.textContent = `Número do contador: ${contador}`;
    atualizarBotões();
    mudarcorNumeros();
});
