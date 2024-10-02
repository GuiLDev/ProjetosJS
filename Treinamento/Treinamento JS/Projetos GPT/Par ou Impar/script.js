// Captura de elementos
const sendForm = document.getElementById('botaoEnviar');
const sendValueButton = document.getElementById('botaoEnviarNumero');
const numeroInput = document.getElementById('numero');
const mensagemErro = document.getElementById('numero-invalido');
const optionSelect = document.getElementById('primeiraSelecao');
const cpuValorDisplay = document.getElementById('cpuValor');
const resultadoDisplay = document.getElementById('resultado');
const resetButton = document.getElementById('resetButton');

// Evento para quando o botão "Escolher" for clicado
sendForm.addEventListener('click', function() {
    const selectedOption = optionSelect.value; // Captura a escolha do jogador (par ou ímpar)
    
    // Desabilita o select após a escolha
    optionSelect.disabled = true;

    // Mostra o campo para digitar o número e o botão "Enviar valor"
    const campoNumero = document.querySelector('.bloco02');
    campoNumero.style.display = 'block';
});

// Evento para quando o jogador clicar no botão "Enviar valor"
sendValueButton.addEventListener('click', function() {
    const selectedOption = optionSelect.value; // Captura a escolha do jogador (par ou ímpar)

    // Chama a função para validar e comparar os números
    enviarNumero(selectedOption);
});

// Função que valida o número do jogador e compara com o número gerado pelo CPU
function enviarNumero(selectedOption) {
    const numeroDigitado = parseInt(numeroInput.value); // Obtém o número digitado pelo jogador
    const min = parseInt(numeroInput.min); // Valor mínimo do input
    const max = parseInt(numeroInput.max); // Valor máximo do input
    const cpuEscolha = selectedOption === 'par' ? 'impar' : 'par'; // O CPU escolhe o oposto do jogador

    // Limpa mensagem de erro e resultados anteriores
    mensagemErro.textContent = '';
    resultadoDisplay.textContent = '';
    cpuValorDisplay.textContent = '';

    // Verifica se o número é válido
    if (isNaN(numeroDigitado)) {
        mensagemErro.textContent = "Por favor, insira um número válido.";
        return;
    }

    // Verifica se o número está dentro do intervalo
    if (numeroDigitado < min || numeroDigitado > max) {
        mensagemErro.textContent = `Erro: O número deve estar entre ${min} e ${max}.`;
        return;
    }

    // Se o número for válido, desativa o campo de input
    numeroInput.disabled = true;

    // Gera um número aleatório para o CPU
    const cpuNumero = Math.floor(Math.random() * (max - min + 1)) + min;
    cpuValorDisplay.textContent = cpuNumero;

    // Soma os dois números
    const soma = numeroDigitado + cpuNumero;

    // Verifica quem ganhou
    const resultado = soma % 2 === 0 ? 'par' : 'impar'; // Verifica se a soma é par ou ímpar

    if (resultado === selectedOption) {
        resultadoDisplay.textContent = "Você ganhou!";
    } else {
        resultadoDisplay.textContent = "CPU ganhou!";
    }

    // Mostra o botão de reset
    resetButton.style.display = 'block';
    sendValueButton.style.display = 'none';
}

// Evento para resetar o jogo
resetButton.addEventListener('click', function() {
    // Habilita novamente o select e o input de número
    optionSelect.disabled = false;
    numeroInput.disabled = false;
    
    // Limpa os valores e esconde os elementos necessários
    numeroInput.value = '';
    cpuValorDisplay.textContent = '';
    resultadoDisplay.textContent = '';
    mensagemErro.textContent = '';
    resetButton.style.display = 'none';
    const campoNumero = document.querySelector('.bloco02');
    campoNumero.style.display = 'none';
    sendValueButton.style.display = 'block';
});