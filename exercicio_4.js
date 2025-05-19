
// 4 programa menu interativo

const prompt = require('prompt-sync')()

console.log("\nMenu dos filmes em cartaz no Javaplex Cinema\n")

console.log("1 - Pecadores (2025)")
console.log("2 - Conclave (2024)")
console.log("3 - Ta Dando Onda (2007)")
console.log("4 - Aftersun (2022)")
console.log("5 - Ainda estou aqui (2024)")

let op = Number(prompt("\nescolha ::::: "))

switch (op){

    case 1: 
        console.log("\nReserva para o filme Pecadores feita com sucesso!\n")
        break
    case 2:
        console.log("\nReserva para o filme Conclave feita com sucesso!\n")
        break
    case 3: 
        console.log("\nReserva para o filme Ta Dando Onda feita com sucesso!\n")
        break
    case 4:
        console.log("\nReserva para o filme Aftersun feita com sucesso!\n")
        break
    case 5: 
        console.log("\nReserva para o filme Ainda Estou Aqui feita com sucesso!\n")
        break
    default:
        console.log("\nInformação Inválida ᶻ 𝗓 𐰁 \n")
        break
}