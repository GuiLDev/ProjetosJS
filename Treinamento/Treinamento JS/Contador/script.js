const botaoIncremento = document.getElementsByClassName('incremento')[0];
const botaoDecremento = document.getElementsByClassName('decremento')[0];
const numeroContador = document.getElementsByClassName('contador')[0];

let contador = 0;
botaoDecremento.disabled = true;

botaoIncremento.addEventListener('click', function(){
    contador++; 
    numeroContador.textContent = `Número do contador: ${contador}`;
    if (contador > 0){
        botaoDecremento.disabled = false;
    }
});


botaoDecremento.addEventListener('click', function(){
    contador--; 
    numeroContador.textContent = `Número do contador: ${contador}`;
    if (contador < 1){
        botaoDecremento.disabled = true;
    }
});
