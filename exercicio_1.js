// 1 - algoritmo par ou impar
const prompt = require('prompt-sync')()

console.log("\n⟡ — Verificação de número par ou ímpar — ⟡\n")

let num = Number(prompt("Insira um número para verificação: "))

if (Number.isNaN(num)) {
    console.log("\nInformação digitada não é número ᶻ 𝗓 𐰁\n")
} else if (num % 2 !== 0) {
    console.log(`\n${num} é ímpar ˎˊ˗\n`)
} else {
    console.log(`\n${num} é par ˎˊ˗\n`)
}