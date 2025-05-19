const prompt = require('prompt-sync')()

// 7 - algortimo da promoção maça

function promocao (maca){

    let total 
    if (Number.isNaN(maca)) {
        return console.log("\nInformação inválida ᶻ 𝗓 𐰁\n")
    } else if (maca >= 12){
        total = maca * 0.25
    } else {
        total = maca * 0.30
    }

    return console.log(`\nTotal da compra: R$${total} reais ❦︎\n`) 
}

console.log("\n ❦︎ Promoção de MAÇÃ ❦︎\nComprando 12 ou MAIS maçãs a unidade sai por R$0,25! Aproveite!\n")

promocao(maca = Number(prompt("Auto-Atendimento - Insira o número de maçãs: ")))