# Jogo de Adivinhar o PIN

Este é um jogo simples construido em JavaScript no qual o jogador deve adivinhar um PIN numérico.

## Desenvolvimento

A avaliação do valor inserido em relação ao PIN correto é realizada comparando os números inseridos pelo jogador com o PIN randômico gerado em cada rodada. O jogo utiliza JavaScript para capturar o valor inserido, compará-lo com o PIN correto e fornecer feedback imediato ao jogador, além de estátisticas, como, precisão, número de tentativas por rodada e histórico. Se o valor inserido for igual ao PIN correto, o jogador recebe uma mensagem de parabéns e avança para a próxima rodada. Caso contrário, o jogo fornece dicas indicando se o valor está muito abaixo, abaixo, acima ou muito acima do PIN correto.

## Dificuldades Conhecidas

Não há dificuldades conhecidas neste momento. Em versões anteriores o fluxo do código era interrompido devido ao uso do alert do navegador, que fornecia feedbacks para o usuário, porém isso foi sanado com a utilização do componente alert fornecido pela biblioteca Bootstrap, além de fornecer uma interface mais amigável.

## Como Utilizar o Sistema

Siga as etapas abaixo para utilizar o jogo de adivinhar o PIN:

1. Abra o arquivo `index.html` em um navegador da web.
2. Insira um número no campo de entrada para tentar adivinhar o PIN.
3. Clique no botão "Verificar".
4. O jogo fornecerá feedback imediato se o PIN está correto, muito abaixo, abaixo, acima ou muito acima do valor inserido.
5. Continue a inserir e verificar os números até acertar o PIN correto e desbloquear novas rodadas.
6. Acompanhe seu desempenho através do histórico de tentativas e dos indicadores de tentativas por rodada e de precisão.

## Tecnologias Utilizadas
- HTML
- CSS (Bootstrap)
- JavaScript