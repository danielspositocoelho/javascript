//condição múltipla switch case: aplicavel para situações de valores possiveis fixos, não da pra usar para intervalors
var agora = new Date();
var diaSem=agora.getDay(); // retorna números: 0 para DOM 1 para SEG ...

switch(diaSem){ // teste da expressão no parametro
    case 0:  //analise if expressao é igual a algum case x  e executa o : bloco
        console.log("Domingo")
        break; // OBRIGATORIO, SE NAO ELE EXECUTA TODOS OS BLOCOS
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terça")
        break;
    case 3:
        console.log("Quarta")
        break;
    case 4:
        console.log("Quinta")
        break;
    case 5:
        console.log("Sexta")
        break;
    case 6:
        console.log("Sábado")
        break;
    default:  // se não for nenhum case, executa o bloco default  
        console.log("ERRO")
}
