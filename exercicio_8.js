const prompt = require('prompt-sync')()

//8 - algoritmo que le 2 valores e poe eles em ordem crescente

console.log("\n𐔌 Programinha de ordenação ")

let valor1 = Number(prompt("  ⤷ Insira o primeiro valor: "))
let valor2 = Number(prompt("   ⤷ Insira o segundo valor: "))

if (Number.isNaN(valor1) || Number.isNaN(valor2)) {
    console.log("\nᶻ 𝘇 Informação inválida 𐰁ᶻ 𐰁\n")
} else if  (valor1 === valor2) {
    console.log("\nNúmeros iguais não é permitido ✖\n")
} else if  (valor1 > valor2) {
    console.log(`\nNova ordem:\n- ${valor1}\n${valor2}`)
} else {
    console.log(`Nova ordem:\n✦ ${valor2}\n✦ ${valor1}`)
}