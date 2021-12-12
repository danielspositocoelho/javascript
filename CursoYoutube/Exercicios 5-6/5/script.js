 // coletar elementos DOM
 var relatorio = document.getElementById("relatorio");
 var resultados = document.getElementById("res");
 var vetor = [];


function add(){
    
    var num = window.document.getElementById("txtNum"); //como variavel global estava retornando 0 pq o valor era atribuido antes do usuario colocar o input, no carregamento da pagina
    var valor = Number(num.value);  // ESTUDAR como fazer isso virar var global e funcionar
    
                                                    // validações: campos vazios, elemento ja inserido, apagar resposta

switch (validar()){
    case "vazio":
        window.alert("Escreva um número na caixa!");
        break;
    case "repetido":
        window.alert(`O número ${valor} já foi inserido na lista`);
        break;
        default:
                                            // adicionar input no arrayC
  vetor.push(valor);
                                                        // adicionar input no relation select
  var item = document.createElement("option");
  item.innerHTML=`O número ${valor} foi inserido com sucesso`;
  relatorio.appendChild(item)
  
  num.value = "" // esvaziar caixa de input 
  num.focus(); // trazer focus pra caixa de input
}


}
function res(){
   if(relatorio.innerHTML==""){
    window.alert("Escreva um número na caixa e o adicione!");
   }else{
// calcular respostas: numero de elementos na array, maior elemento, menor, soma total, media

//COPIA POR .SLICE()  -arrayC(copia de vetor)                                      // COPIA POR LOOP  
const arrayC = vetor.slice();                                                           /*arrayC = [];
                                                            for (let i=0; i<tamanho; i++){
                                                                arrayC[i] = vetor[i];
                                                                soma+=vetor[i];
                                                            }*/
//arrayC.sort(); -- .sort faz ordenação alfabética! trata tudo como char. para resovler, ou faça um função sort ou use uma array de tipo identificado com new int64arrayC()
// VAMOS FAZER POR SORT, PODERIA SER FEITO USANDO FUNÇÃO MATH.MAX/MIN OU MESMO UM ALGO SIMPEL DE MAIOR MENOR LENDO A ARRAY
BubbleSort(arrayC);

let tamanho = arrayC.length;
let soma = 0;
for (let z=0; z<tamanho; z++){
    soma+=arrayC[z];
}
let media =soma/tamanho;

//exibir respostas
resultados.innerHTML="";
 
resultados.innerHTML+=`<p>A lista tem ${tamanho} elementos.</p>`
resultados.innerHTML+=`<p>O menor elemento é ${arrayC[0]}</p>`
resultados.innerHTML+=`<p>O maior elemento é ${arrayC[tamanho-1]}</p>`
resultados.innerHTML+=`<p>A soma total de todos os elementos é ${soma}</p>`
resultados.innerHTML+=`<p>A média de todos os elementos é ${media}</p>`  
      }
}


function BubbleSort(array){
    for (let i = 0; i<array.length-1; i++){
        for (let y=0;y<(array.length-i-1);y++)
         {
            if(array[y]>array[y+1]){
                let buffer = array[y];
                array[y]= array[y+1];
                array[y+1]=buffer;      
            }
         }
    }
    return array;    
}

function apagar(arrayA,ArrayB=0){
    var num = window.document.getElementById("txtNum");
    resultados.innerHTML="";
    relatorio.innerHTML="";
    num.value = "";
    num.focus();
    arrayA.length=0;
    arrayB.length=0;
    return arrayA;
    return arrayA;
}

function validar(){
    
    var num = window.document.getElementById("txtNum");
    var valor = Number(num.value);
    if(num.value.length==0){
        return "vazio";
    } else if(vetor.indexOf(valor)!=-1){
        return "repetido";
    }
}