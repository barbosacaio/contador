// Variável do valor inicial do contador
let contador = 0;

// Seleciona o valor do contador e os botões de controle
const valor = document.querySelector('#valor');
const botoes = document.querySelectorAll('.botao');

// Seleciona os botões separadamente
botoes.forEach(function(botao){
    // Verifica quando um dos botões é clicado
    botao.addEventListener('click', function(e){
        // Salva todas as classes do botão em uma variável
        const classes = e.currentTarget.classList;

        // Verifica as classes do botão clicado e faz a ação de acordo com o clique
        if(classes.contains('diminuir')){
            contador--;
        }else if(classes.contains('reiniciar')){
            contador = 0;
        }else{
            contador++;
        }

        // Muda a cor do número do contador de acordo com o valor
        if(contador > 0){
            valor.style.color = "green";
        }else if(contador == 0){
            valor.style.color = "black";
        }else{
            valor.style.color = "red";
        }

        // Muda o valor do número de acordo com a variável 'contador'
        valor.textContent = contador;
    });
});