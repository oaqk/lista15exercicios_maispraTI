// 5 - programa de IMC

const prompt = require('prompt-sync')()

console.log("\nCalculadora de IMC\n")

let peso = Number(prompt("Digite seu peso em kg (ex.: 60): "))
let alt = Number(prompt("Digite sua altura em metros (ex.: 1.65): "))
let imc 

if ((Number.isNaN(peso)) || (Number.isNaN(alt))) {
    console.log("\nAlguma(s) das informações inseridas não é válida ᶻ 𝗓 𐰁\n")
} else if (Number.isInteger(alt)) {
    console.log("\nInformação de altura não está no formato correto ⚠︎ \n")
} else {

    imc = peso/(alt**2)
    imc = imc.toFixed(2)

    if (imc < 18.5){
        console.log(`I\nMC: ${imc}. Tipo Baixo peso`)
    } else if ((imc >= 18.5) && (imc <= 24.9)){
        console.log(`\nIMC: ${imc}. Tipo Peso normal`)
    } else if ((imc >= 25) && (imc <= 29.9)){
        console.log(`\nIMC: ${imc}. Tipo Sobrepeso`)
    } else if ((imc >= 30) && (imc <= 34.9)){
        console.log(`\nIMC: ${imc}. Tipo Obesidade Grau I`)
    } else if ((imc >= 35) && (imc <= 39.9)){
        console.log(`\nIMC: ${imc}. Tipo Obesidade Grau II`)
    } else {
        console.log(`\nIMC: ${imc}. Tipo Obesidade Grau III`)
    }

}