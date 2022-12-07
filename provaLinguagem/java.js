const corEscolhida = document.getElementById('cores');
const idadeEscolhida = document.getElementById('idade');
const sexoEscolhido = document.getElementById('sexo');
const form = document.getElementById('form');
const botao = document.getElementById('botao');

const formArray = [];

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  onDemand(formArray);
  console.log(formArray)
  // Azuis(formArray);
  
})

function onDemand(formArray){
  formArray.push([
    corEscolhida.value,
    idadeEscolhida.value,
    sexoEscolhido.value
  ]);

  pessoasAzul(formArray);
  
}


function pessoasAzul(formArray){
  let counter = 0;
  for (azulSelecionado of formArray){
    if(azulSelecionado[0] == "azul"){
      counter++;
    }
  }

  const total = (100 * counter) / formArray.length;

  // const totalAzul = (counter/100)*count
  document.getElementById('azul').textContent = total
}


var count = 0;
var btn = document.getElementById("botao");
var disp = document.getElementById("display"); 
btn.onclick = function () {
  count++;
  disp.innerHTML = count;
  // console.log(count)
}