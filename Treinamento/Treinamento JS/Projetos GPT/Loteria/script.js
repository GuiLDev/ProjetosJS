const pNumeros = document.querySelectorAll('.numeroLot');
const msgError = document.getElementById('error-msg');
const numList = document.getElementById('num-list');
const contadorMax = 6;
let contador = 0;
let listaSelecionados = [];  // Array para armazenar os números selecionados

pNumeros.forEach(function(p) {
    p.addEventListener('click', function() {
        const numero = p.textContent;

        if (!p.classList.contains('numSel') && contador < contadorMax) {
            p.classList.remove('numeroLot');
            p.classList.add('numSel');
            listaSelecionados.push(numero);  // Adiciona o número à lista
            contador++;
        } else if (p.classList.contains('numSel')) {
            p.classList.remove('numSel');
            p.classList.add('numeroLot');
            const index = listaSelecionados.indexOf(numero);
            if (index > -1) {
                listaSelecionados.splice(index, 1);  // Remove o número da lista
            }
            contador--;
        }


        // Verifica se o máximo foi atingido
        if (contador >= contadorMax) {
            msgError.textContent = 'Numero máximo selecionado';
        }else{
            msgError.textContent = '';
        }

        console.log('Números selecionados:', listaSelecionados);  // Mostra a lista no console


        if(listaSelecionados.length > 0){
            numList.textContent = `Os números selecionados são: ${[listaSelecionados]}`;
        }else{
            numList.textContent = '';
        }
       

        
    });
});