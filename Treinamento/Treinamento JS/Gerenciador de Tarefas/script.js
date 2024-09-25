const botaoForm = document.querySelector('.envioForm')
const tarefa = document.querySelector('#campoTarefa')
const blocoLista = document.querySelector('.campoFormListUl')

function criarTarefa(){
    const nomeTarefa = tarefa.value.trim();
    if(nomeTarefa === ''){
        alert('Digite uma tarefa valida');
        return;
    }

    const li = document.querySelector('li');
    li.textContent = nomeTarefa;
    blocoLista.appendChild(li);
    tarefa.value = '';

    li.addEventListener('click', function(){
        li.classList.toggle('concluida');
    });


    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    li.appendChild(botaoExcluir)

    botaoExcluir.addEventListener('click', function(){
        blocoLista.removeChild(li);
    })
}

botaoForm.addEventListener('click', criarTarefa);