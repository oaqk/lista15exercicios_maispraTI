// 3 - programa de reprovação

const prompt = require('prompt-sync')()

console.log("\nSistema de Notas\n")

let nota1 = Number(prompt("Insira AV1: "))
let nota2 = Number(prompt("Insira AV2: "))
let nota3 = Number(prompt("Insira AV3: "))
let media 

if ((Number.isNaN(nota1)) || (Number.isNaN(nota2)) || (Number.isNaN(nota3))){
    console.log("\nAlguma(s) das informações inseridas não é válida\n")
} else {
    media = ((nota1 + nota2 + nota3)/3).toFixed(2)
    if (media <= 3) {
        console.log(`\nNota ${media} ✖ Aluno reprovado`)
    } else if (media <= 6) {
        console.log(`\nNota ${media} ↳↰ Aluno em recuperação`)
    } else {
        console.log(`\nNota ${media} ✓ Aluno aprovado`)
    }
}