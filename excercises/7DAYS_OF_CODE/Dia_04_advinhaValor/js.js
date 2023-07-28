var gerador = Math.floor(Math.random() * (0, 10))
const formulario = document.querySelector('#meuForm')

var tentativas = 3

console.log(gerador)

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    
    var resposta = document.querySelector('#resposta').value;
    
    
    if(resposta == gerador) {
        alert('Parabéns você acertou! Jogo resetado.')
        location.reload();
    } 
    
    else if(tentativas > 0) {
         tentativas = tentativas - 1    
         alert('Resposta errada, tente novamente,' + ` mais ${tentativas} tentativas!`)  
        }
           
    else if(tentativas == 0) {  
        alert('tentativas encerradas, jogo resetado!' + ` Número sorteado era ${gerador}`)
        location.reload();
}
    console.log(tentativas)

}


)

/* 
    if(resposta != gerador) {
        alert('Resposta errada, tente novamente' + ` estava pensando no ${gerador}` + ` e você respondeu ${resposta}`)
    } else if (resposta == gerador) {
        alert('Parabéns você acertou')
        location.reload();
    }  */