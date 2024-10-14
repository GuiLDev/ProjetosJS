const langUS = document.getElementById('US');
const langUK = document.getElementById('UK');
const campoNome = document.getElementById('inp-nome');
const btnGerar = document.getElementById('btn-gerar');
const blcText = document.querySelector('.blocoTexto');


btnGerar.addEventListener('click', function(){
    let nome = campoNome.value;
    let lugar = ["Xique-Xique", "Barão", "São Paulo"];
    let lugar2 = ["Sinop", "Sorriso", "Bombaclat" ];
    let distancia = ["3000km", "2340km", "7000km", "5000km", "logo ali"];
    let profissao = ["Carteiro", "Médico", "Advogado", "Lixeiro"];
    let faculdade = ["Oxford", "USP", "Harvard", "UNIC", "FASIPE"]
    let lang;
    
    if(langUS.checked){
        lang = langUS.value;
    }else if(langUK.checked){
        lang = langUK.value;
    }else{
        lang = null;
    }


    let hist;

    let lugarAleatorio = lugar[Math.floor(Math.random() * lugar.length)];
    let lugar2Aleatorio = lugar2[Math.floor(Math.random() * lugar2.length)];
    let distanciaAleatorio = distancia[Math.floor(Math.random() * distancia.length)];
    let profissaoAleatorio = profissao[Math.floor(Math.random() * profissao.length)];
    let faculdadeAleatorio = faculdade[Math.floor(Math.random() * faculdade.length)];
    

    hist = `A historia conta a vida de um homem chamado ${nome} que morava em ${lugarAleatorio} que ficava ${distanciaAleatorio} de ${lugar2Aleatorio}. Ele queria ser ${profissaoAleatorio} entao estudou na faculdade ${faculdadeAleatorio}.`;

    blcText.textContent = hist;

})