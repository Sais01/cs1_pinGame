let userInput;
let rodada = 1;
let tentativasRodada = 0;
let indiceProximidade = 10;
let pinCorreto = Math.floor(Math.random()*101); //numero randomico de 0 - 100

let historicoTentativas = new Array();

let elementoIndicadorTentativas = document.getElementById('indicadorTentativas');
let elementoHistoricoTentativas = document.getElementById('historicoTentativas');
let elementoAlertaStatus = document.getElementById('alertaStatus');
let elementoIndicadorRodada = document.getElementById('indicadorRodada');
let elementoIndicadorPrecisao = document.getElementById('indicadorPrecisao');

function atualizaRodadaHistórico(rodada){
    elementoHistoricoTentativas.innerHTML += "<br>";
    elementoHistoricoTentativas.innerText += `\nRodada ${rodada}: `;
    
    
}

function atualizaAlertaStatus(resultado, mensagem){
    elementoAlertaStatus.style.color = "white";
    elementoAlertaStatus.innerText = mensagem;

    if(resultado == true){
        elementoAlertaStatus.style.backgroundColor = 'green';
    }else{
        elementoAlertaStatus.style.backgroundColor = 'red';
    }
}

function atualizaIndicadorRodada(rodada){
    elementoIndicadorRodada.innerText = `Rodada: ${rodada} `;
}

console.log(`PIN rodada ${rodada}: ${pinCorreto}`);
atualizaIndicadorRodada(rodada);
atualizaRodadaHistórico(rodada);

document.getElementById('pinForm').addEventListener('submit', function(event) {
    event.preventDefault(); //Faz com que a página não reinicialize ao submeter o formulário

    userInput = document.getElementById('pinInput').value;

    // %%%%%%%%%%%%% Atualiza histórico e indicador de tentativas %%%%%%%%%%%%%%%%%%%
    tentativasRodada++;
    historicoTentativas.push(userInput);
    elementoIndicadorTentativas.innerText = "Tentativas: "+tentativasRodada;       
    elementoHistoricoTentativas.innerText += ` ${tentativasRodada}°: ${userInput} `;
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    if (userInput == pinCorreto) {
        atualizaAlertaStatus(true,`Parabéns, você acertou o PIN após ${tentativasRodada} tentativas.\n Vá para a rodada ${rodada+1}!`);

        pinCorreto = Math.floor(Math.random()*101);
        console.log(`PIN rodada ${rodada+1}: ${pinCorreto}`);
        tentativasRodada = 0;
        rodada++;
        atualizaIndicadorRodada(rodada);
        atualizaRodadaHistórico(rodada);
        elementoIndicadorTentativas.innerText = "Tentativas: "+tentativasRodada;
    } else {
        if (userInput < (pinCorreto-indiceProximidade)) {
            atualizaAlertaStatus(false,'PIN incorreto. Tente um número MUITO MAIOR do que '+ userInput);
        } else if (userInput < pinCorreto){
            atualizaAlertaStatus(false,'PIN incorreto. Tente um número MAIOR do que '+ userInput);
        }else if (userInput > (pinCorreto+indiceProximidade)){
            atualizaAlertaStatus(false,'PIN incorreto. Tente um número MUITO MENOR do que '+ userInput);
        }else{
            atualizaAlertaStatus(false, 'PIN incorreto. Tente um número MENOR do que '+ userInput);
        }
    }

    document.getElementById('pinInput').value = '';
    
    //atualiza indicador de precisão
    elementoIndicadorPrecisao.innerText = `Precisão: ${(((rodada-1)/historicoTentativas.length)*100).toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}%`;
});








