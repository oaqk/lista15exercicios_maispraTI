const prompt = require('prompt-sync')()

// 10 - algoritmo que le um numero inteiro e imprimir 10 vezes

console.log("\n≽^• ˕ • ྀི≼\nImpressão de números! Apenas 10 vezes.\nDigite o número")
let num = (Number(prompt(">>> ")))

if (Number.isNaN(num)){
     console.log("\nᶻ 𝘇 Informação inválida 𐰁ᶻ\n")
} else {

    for (let i = 1; i <= 10; i++){
        console.log(`${i}º Impressão: ${num}`)
    }
}