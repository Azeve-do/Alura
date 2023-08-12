const salaJS = [10, 9, 8, 7, 6, 5]
const salaJava = [10, 2, 3, 8, 5]
const salaPython = [9, 8.5, 2, 3, 4, 7]

function calculaMedia (notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acomulador, nota) => {
        return acomulador + nota
    }, 0)

    const media = somaDasNotas / notasDaSala.length

    return media;
}

console.log(calculaMedia(salaJS))