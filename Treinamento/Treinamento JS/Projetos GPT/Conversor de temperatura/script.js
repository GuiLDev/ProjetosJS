const firstSelect = document.getElementById('firstChoice');
const secondSelect = document.getElementById('secondChoice');
const convButton = document.getElementById('enviarConv');
const msgErro = document.getElementById('errorMessage');



convButton.addEventListener('click', function(){
    const primeiroValor = parseFloat(document.getElementById('campoUm').value);
    const segundoValor = document.getElementById('campoDois');

    if(firstSelect.value === secondSelect.value){
        msgErro.textContent = 'Temperatura é a mesma, seleciona uma diferente';
        return;
    }


    if(isNaN(primeiroValor)){
        msgErro.textContent = 'Digite um valor válido';
        return;
    }


    if(firstSelect.value === 'celsius' && secondSelect.value === 'kelvin'){
        const ck = primeiroValor + 273.15;
        segundoValor.value = ck.toFixed(0);
        msgErro.textContent = '';
    }else if(firstSelect.value === 'celsius' && secondSelect.value === 'fahrenheit'){
        const cf = (primeiroValor * 9/5) + 32;
        segundoValor.value = cf.toFixed(0);
        msgErro.textContent = '';
    }


    if(firstSelect.value === 'kelvin' && secondSelect.value === 'celsius'){
        const kc = primeiroValor - 273.15;
        segundoValor.value = kc.toFixed(0);
        msgErro.textContent = '';
    }else if(firstSelect.value === 'kelvin' && secondSelect.value === 'fahrenheit'){
        const kf = (primeiroValor - 273.15) * 9/5 + 32;
        segundoValor.value = kf.toFixed(0);
        msgErro.textContent = '';
    }

    
    if(firstSelect.value === 'fahrenheit' && secondSelect.value === 'celsius'){
        const fc = (primeiroValor - 32) * 5/9;
        segundoValor.value = fc.toFixed(0)
        msgErro.textContent = '';
    }else if(firstSelect.value === 'fahrenheit' && secondSelect.value === 'kelvin'){
        const fk = (primeiroValor - 32) * 5/9 + 273.15;
        segundoValor.value = fk.toFixed(0)
        msgErro.textContent = '';
    }


    
})
