const prompt = require('prompt-sync')()

//13 - fazer algoritimo que leia números decimais ate que o usuario digite 0 e depois fazer a media aritmetrica 

let deciTable = []
let numeroDeci = undefined

console.log("\n⌞ Média de Números decimais ⌝\n    Digite os números: \n")

do {

    numeroDeci = Number(prompt("> "))

    if (Number.isNaN(numeroDeci)) {
        console.log("\nᶻ 𝘇 Informação inválida 𐰁 ૮(ˊ ᵔ ˋ)ა ᶻ 𐰁\n> Tente novamente ou digite 0 para parar⤵\n")
    } else if (Number.isInteger(numeroDeci) && numeroDeci != 0){
        console.log("\n (〃．．)ﾉ Número informado não é decimal. \nTente novamente ou digite 0 para parar ⤵\n")
    } else if (numeroDeci != 0) {
        deciTable.push(numeroDeci)
    }

} while (numeroDeci != 0)

media = (deciTable.reduce((acc, valor) => acc + valor, 0)/deciTable.length).toFixed(2)
console.log(`\nMédia adquirida: ${media}`)