const prompt = require('prompt-sync')()

// 6 - programa para verificar o triangulo

console.log("\nTipificação de Triangulo\n")

let ladoA = Number(prompt("Insira o valor do Lado A: "))
let ladoB = Number(prompt("Insira o valor do Lado B: "))
let ladoC = Number(prompt("Insira o valor do Lado C: "))

if ((Number.isNaN(ladoA)) || (Number.isNaN(ladoB)) || (Number.isNaN(ladoC))) {
    console.log("\nAlguma(s) das informações inseridas não é válida\n")
} else if ((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)){
    console.log("\nVerificação de triângulo concluída...\n")
    if ((ladoA === ladoB) && (ladoB === ladoC) && (ladoA === ladoB)) {
        console.log("Triângulo Equilátero!!\n")
    } else if ((ladoA != ladoB) && (ladoB != ladoC) && (ladoA != ladoC)) {
        console.log("Triângulo Escaleno!!\n")
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo Isósceles!!\n")
    }
}