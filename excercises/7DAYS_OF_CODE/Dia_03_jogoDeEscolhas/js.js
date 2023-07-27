const modalidade = prompt('Front-End  ou Back-End ?')
let linguagem = '';

if (modalidade === 'Front-End') {
    linguagem = prompt('Você quer aprender React ou Vue?')
} else if (modalidade === 'Back-End') {
    linguagem = prompt('Você quer aprender C# ou Java?')
} else {
    alert('resposta inválida')
}

const fullstackOuEspecializacao = prompt('Você quer se espeacilizar na linguagem (1) ou seguir full stack (2)?')

if(fullstackOuEspecializacao == 1) {
    alert(`continue aprendendo ${linguagem} para ser espeacilizar em ${modalidade}`)
} else if (fullstackOuEspecializacao == 2) {
    alert(`Se esforce bastante!`)
}

let maislinguagem = prompt('Gostaria de aprender mais alguma linguagem? ')

let upperMaislinguagem = maislinguagem.toUpperCase();

while (upperMaislinguagem === 'SIM') {
    if (upperMaislinguagem !== 'SIM') {
        break
    } else {
        upperMaislinguagem = prompt('Gostaria de aprender mais alguma linguagem? ')
        let novaLinguagem = prompt('Qual?')
    }
}