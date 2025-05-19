const prompt = require('prompt-sync')()

//14 - calcular fatorial de numero fornecido pelo usuario

console.log("\n૮˶ᵔ ᵕ ᵔ˶ა\nFatorial de números .ᐟ")
let numFatorial = Number(prompt("Digite um número para fatoriar: "))

if (Number.isNaN(numFatorial)) {
    console.log("\nᶻ 𝘇 Informação inválida 𐰁 ᶻ 𐰁\n")
} else if (numFatorial === 0){ 
    console.log(`\n.ᐟ Fatorial de ${numFatorial}!: 1\n`)
} else {
    let localFatorial = 1                   
    for (i = 1; i <= numFatorial; i++){
        localFatorial *= i
    }
    console.log(`\n.ᐟ Fatorial de ${numFatorial}!: ${localFatorial.toLocaleString('pt-br')}\n`)
}