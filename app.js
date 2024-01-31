//Variaveis
let listaNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


//Função de inicialização
mensagemInicio(); 

function exibirTextoNaTela(tag,texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2});
    // Exibe o texto e captura o palpite informado pelo jogador

};

function mensagemInicio(){

    exibirTextoNaTela('h1', "Chute e acerte o Número Secreto!");
    exibirTextoNaTela('p',  "Escolha um Número de 0 a 10");
    //Mensagens de Entrada.
}

//Função de verificação e condicionais
function verificarChute(){

    let chute = document.querySelector('input').value;
   
    
    if (chute == numeroSecreto) {

        exibirTextoNaTela('h1', "Você Acertou! :)");
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você acertou o Número Secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{

        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', "Errouuuuu! :(");
            exibirTextoNaTela('p', "O número secreto e Menor. Tente Novamente!");
        }
        else {

            exibirTextoNaTela('h1', "Errouuuuu! :(");
            exibirTextoNaTela('p', "O número secreto e Maior. Tente Novamente!");
     
        } 

    } tentativas++;

    limparCampo();

}

//Função para gerar numeros aleatorios e armazenadmentos de tentativas para evitar repetições
function gerarNumeroAleatorio(){

   let numeroEscolhido = parseInt(Math.random() * numeroLimite);
   let quantidadeDeElementosNaLista = listaNumeroSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite){
        listaNumeroSorteados = [];
   }

   if (listaNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();

   } else {
        listaNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
   } 
   

}

// Função clean para o campo de input 
function limparCampo(){

    chute = document.querySelector('input');
    chute.value = '';

}

//Função para reiniciar o jogo atráves do botão Novo Jogo
function reiniciarJogo(){

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicio();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}