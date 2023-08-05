const lista = document.getElementById('lista')

var frutas = []
var açougue = []
var mercearia = []

var adicionarItem = prompt('LISTA DE COMPRAS, CONTINUAR ? Sim ou Não.')

while (adicionarItem == 'Sim') {
    var adicionarItem = prompt('Quer adicionar algum item na lista? Sim, Não ou Remover?')
    atribuindoValor()

    if (adicionarItem == 'Remover') {
        removerValor()
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

function removerValor () {
    var remover = prompt('Qual item deseja retirar?')

    if(frutas.indexOf(remover) != -1) {
        frutas.splice(frutas.indexOf(remover), 1)
        alert(`${remover} foi removido com sucesso`)
    }
    
    else if (açougue.indexOf(remover) != -1) {
        açougue.splice(açougue.indexOf(remover), 1)
        alert(`${remover} foi removido com sucesso`)
    }
    
    else if (mercearia.indexOf(remover) != -1) {
        mercearia.splice(mercearia.indexOf(remover), 1)
        alert(`${remover} foi removido com sucesso`)
    }

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