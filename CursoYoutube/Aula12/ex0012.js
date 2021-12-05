var agora = new Date() //como obter horário do sistema ---se back-end, horario do server, se front, hrario do user
var hora = agora.getHours();
console.log(`Agora é ${hora} horas`)
if(hora<12){
    console.log("Bom dia")
}else if (hora<18){
    console.log("Boa tarde")
}else{
    console.log("Boa Noite")
}