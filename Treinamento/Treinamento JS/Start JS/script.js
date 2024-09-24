const button = document.querySelector("button");

button.addEventListener("click", mudaNome);

function mudaNome(){
    const nome = prompt("Digite o nome");
    button.textContent = 'Quem apertou o botão foi: $[nome]';
    console.log("teste");
}