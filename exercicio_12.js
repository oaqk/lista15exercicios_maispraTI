const prompt = require('prompt-sync')()

//12 - exibe a tabuada de um numero fornecido pelo usuario

let num = Number(prompt(" ฅ^>⩊<^ฅ Digite um numero de 1 a 10: "))

if (Number.isNaN(num)){
    console.log("\nᶻ 𝘇 Informação inválida 𐰁 ᶻ 𐰁\n")
} else {
    for (let i = 1; i <= 10; i++){
        console.log(`${num} ⋆ ${i} = ${i * num}`)
    }

}
