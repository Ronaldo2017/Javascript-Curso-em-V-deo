var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem){
    case 0:
        console.log('Domingo')
    break
    case 1:
        console.log("Segunda")
    break
    case 1:
        console.log("Terça")
    break
    case 1:
        console.log("Quarta")
    break
    case 1:
        console.log("Quinta")
    break
    case 1:
        console.log("Sexta")
    break
    case 1:
        console.log("Sábado")
    break
    default:
        console.log('[ERRO] dia inválido')
}