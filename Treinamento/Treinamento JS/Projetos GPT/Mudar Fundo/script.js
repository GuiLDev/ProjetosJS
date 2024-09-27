const button = document.getElementById('button');
const fundo = document.getElementById('fundo');

button.addEventListener('click', function () {
    if (fundo.classList.contains('fundo')) {
        fundo.classList.remove('fundo');
        fundo.classList.add('vermelho');
    } else if (fundo.classList.contains('vermelho')) {
        fundo.classList.remove('vermelho');
        fundo.classList.add('azul');
    } else if (fundo.classList.contains('azul')) {
        fundo.classList.remove('azul');
        fundo.classList.add('verde');
    } else if (fundo.classList.contains('verde')) {
        fundo.classList.remove('verde');
        fundo.classList.add('cyan');
    } else { // Aqui é o caso que retorna ao estado inicial
        fundo.classList.remove('cyan');
        fundo.classList.add('fundo'); // Retorna ao estado inicial
    }
});