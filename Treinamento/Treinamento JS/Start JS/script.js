document.addEventListener("DOMContentLoaded", function(){
const button = document.querySelector("button");

button.addEventListener("click", mudaNome);

function mudaNome(){
    const nome = prompt("Digite o nome");
    if (nome){
        button.textContent = `Quem apertou o botão foi: ${nome}`;
    }else{
        button.textContent = "Ninguem apertou o botão";
    }
}
});
