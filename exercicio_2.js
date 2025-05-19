const prompt = require('prompt-sync')()

console.log("\n          ˗ˏˋ ★ ˎˊ˗         \nClassificador  de faixa etária!\n")
let idade = Number(prompt("Digite a idade do usuário: "))

if (Number.isNaN(idade)) {
    console.log("\nInformação inserida não é válida (᎑ ᎑).zzZ \n")
} else if ((idade >= 0) && (idade <= 12)) {
    console.log("\n★   Usuário criança   ★\n")
} else if ((idade >= 13) && (idade <= 17)){
    console.log("\n★   Usuário adolescente   ★\n")
} else if ((idade >= 18) && (idade <= 64)){
    console.log("\n★   Usuário adulto   ★\n")
} else if ((idade >= 65) && (idade < 122)) {
    console.log("\n★   Usuário idoso   ★\n")
} else {
    console.log("\nSó é humanamente possível viver até os 122 anos, segundo registros históricos. Descanse em paz, Jeanne Louise Calment.\n")
}

