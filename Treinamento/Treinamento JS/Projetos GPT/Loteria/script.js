const pNumeros = document.querySelectorAll('.numeroLot');
const contadorMax = 6;
let contador = 0;

pNumeros.forEach(p => {
    p.addEventListener('click', function() {
        console.log(`Número ${p.textContent} foi clicado.`);
        p.classList.remove('numeroLot');
        p.classList.add('numSel');

    });
});
