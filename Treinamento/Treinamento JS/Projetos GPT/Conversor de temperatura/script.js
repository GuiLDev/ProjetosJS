const firstSelect = document.getElementById('firstChoice');
const secondSelect = document.getElementById('secondChoice');
const convButton = document.getElementById('enviarConv');


convButton.addEventListener('click', function(){
    const primeiroValor = parseFloat(document.getElementById('campoUm').value);
    const segundoValor = document.getElementById('campoDois');
    if(firstSelect.value === 'celsius' && secondSelect.value === 'kelvin'){
        const ck = primeiroValor + 273.15;
        segundoValor.value = ck;
    }else if(firstSelect.value === 'celsius' && secondSelect.value === 'fahrenheit'){
        const cf = (primeiroValor * 9/5) + 32
        segundoValor.value = cf;
    }else{
        
    } 
    
    
})

