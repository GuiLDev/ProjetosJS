const botaoForm = document.querySelector('.envioForm');
const tarefa = document.querySelector('#campoTarefa');
const blocoLista = document.querySelector('.campoFormListUl');

function criarTarefa() {
    const nomeTarefa = tarefa.value.trim();
    if (nomeTarefa === '') {
        alert('Digite uma tarefa válida');
        return;
    }

    const li = document.createElement('li');
    li.textContent = nomeTarefa;

    const checkBoxImportant = document.createElement('input');
    checkBoxImportant.type = 'checkbox';
    checkBoxImportant.classList.toggle('checkboxField');
    li.appendChild(checkBoxImportant);

    checkBoxImportant.addEventListener('change', function() {
        li.classList.toggle('concluida', checkBoxImportant.checked);
    });

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    li.appendChild(botaoExcluir);

    botaoExcluir.addEventListener('click', function() {
        blocoLista.removeChild(li);
    });

    // Adiciona o item <li> ao <ul>
    blocoLista.appendChild(li);

    // Limpa o campo de entrada após adicionar a tarefa
    tarefa.value = '';
}

botaoForm.addEventListener('click', criarTarefa);