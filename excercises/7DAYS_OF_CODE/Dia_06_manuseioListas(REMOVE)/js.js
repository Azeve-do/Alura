const lista = document.getElementById('lista')

var frutas = []
var açougue = []
var mercearia = []

var adicionarItem = prompt('LISTA DE COMPRAS, CONTINUAR ? Sim ou Não.')

while (adicionarItem == 'Sim') {
    var adicionarItem = prompt('Quer adicionar algum item na lista? Sim ou Não.')
    atribuindoValor()

    if (adicionarItem == 'Não') {

        alert('Lista finalizada')
                    
        var categoriaFrutas = document.createElement('p')
        categoriaFrutas.innerHTML = 'Frutas: ' + frutas

        var categoriaAçougue = document.createElement('p')
        categoriaAçougue.innerHTML = 'Açougue: ' + açougue

        var categoriaMercearia = document.createElement('p')
        categoriaMercearia.innerHTML = 'Mercearia: ' + mercearia

        lista.appendChild(categoriaFrutas)
        lista.appendChild(categoriaAçougue)
        lista.appendChild(categoriaMercearia)
    }
}

function atribuindoValor () {

    if (adicionarItem == 'Sim') {  
        var item = prompt('Qual item?')
        var categoria = prompt('Em qual categoria?')
    
        if (categoria == 'frutas') {
            frutas.push(item)
        } 
        
        else if (categoria == 'açougue') {
            açougue.push(item)
        } 
    
        else if (categoria == 'mercearia') {
            mercearia.push(item)
        }
    }  
} 