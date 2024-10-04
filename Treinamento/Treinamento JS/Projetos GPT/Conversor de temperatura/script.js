const firstSelect = document.getElementById('firstChoice');
const secondSelect = document.getElementById('secondChoice');
const convButton = document.getElementById('enviarConv');
const msgErro = document.getElementById('errorMessage')



convButton.addEventListener('click', function(){
    const primeiroValor = parseFloat(document.getElementById('campoUm').value);
    const segundoValor = document.getElementById('campoDois');

    if(isNaN(primeiroValor)){
        msgErro.textContent = 'Digite um valor válido';
        return;
    }

    if(firstSelect.value === 'celsius' && secondSelect.value === 'kelvin'){
        const ck = primeiroValor + 273.15;
        segundoValor.value = ck;
        msgErro.textContent = ''
    }else if(firstSelect.value === 'celsius' && secondSelect.value === 'fahrenheit'){
        const cf = (primeiroValor * 9/5) + 32
        segundoValor.value = cf;
        msgErro.textContent = ''
    }else{
        msgErro.textContent = 'Selecione uma temperatura diferente'
    } 
    
    
})
