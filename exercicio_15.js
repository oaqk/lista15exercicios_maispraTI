const prompt = require('prompt-sync')()

console.log("\n♪♪ Pizza Mozzarella ♪♪\n  Fibonacci Printer\n")
               //se quiser digitar outro número so desbloquear aqui ↴
let vezes = 10 //Number(prompt("Digite quantos elementos da sequência deseja imprimir: "))
let gyroZeppeli = [0, 1]

for (fibonacci = 0; fibonacci < vezes - 2; fibonacci++){ //aqui o 0 conta como elemento tbm
    gyroZeppeli.push(gyroZeppeli[fibonacci] + gyroZeppeli[fibonacci + 1])
}

console.log(`\n𖦹 Fibonacci ${vezes} primeiros: ${gyroZeppeli.join(", ")} 𖦹\n`)


