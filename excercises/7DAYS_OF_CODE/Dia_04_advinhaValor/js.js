var gerador = Math.floor(Math.random() * (1, 11))
const formulario = document.querySelector('#meuForm')
var tentativas = 3

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    
    var resposta = document.querySelector('#resposta').value;
    
    if(resposta == gerador) {
        alert('Parabéns você acertou! Jogo resetado.')
        location.reload();
    } 
    
    else if(tentativas > 1) {
         tentativas = tentativas - 1    
         alert('Resposta errada, tente novamente,' + ` mais ${tentativas} tentativas!`)  
        }
           
    else if(tentativas == 1) {  
        alert('tentativas encerradas, jogo resetado!' + ` Número sorteado era ${gerador}`)
        location.reload();
}
}
)