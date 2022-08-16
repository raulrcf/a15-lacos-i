

let promptUsuario=prompt("Você quer coxinha ? S para sim e N para não")

let conta = 0

while(promptUsuario!=="N"){
    conta+=2.50
    console.log("Sua conta agora é "+conta)
    promptUsuario=prompt("Você quer coxinha ? S para sim e N para não")
}

console.log("Muito Obrigado, sua conta é  " + conta)

