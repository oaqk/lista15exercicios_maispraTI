const prompt = require('prompt-sync')()

// 11 - algoritmo que solicita 5 numeros usando for e soma

console.log("\n₍ᐢ. .ᐢ₎ Soma de cinco números ₍ᐢ. .ᐢ₎\nDigite os números:\n")

let soma = 0

for (let i = 1; i <= 5; i++){
    let num = (Number(prompt(`${i} > `)))
    if (Number.isNaN(num)){
        console.log("\nInformação inválida ᶻ 𝗓 𐰁 Tente novamente!\n")
        i--
    } else {
        soma += num
    }
}

console.log(`Soma: ${soma}`)