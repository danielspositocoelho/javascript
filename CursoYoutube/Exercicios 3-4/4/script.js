function calc(){
                                                //pegando elementos dos input
    let res = document.getElementById("res");
    
    let numA = document.getElementById("numA");
    if(numA.value.length==0){
        window.alert("Por favor, digite um número no primeiro campo!");
    } else{
        var numeroA = Number(numA.value);        // tabuada desse num
    }
    
    let numB = document.getElementById("numB");
    if(numB.value.length==0){
        window.alert("Por favor, digite um número no segundo campo!");
    }
    else{
        var numeroB = Number(numB.value);        // até esse num
    }
 
if(res.hasChildNodes()){    //limpar resultados antes do novo
        res.removeChild(res.childNodes[0]);
        res.innerHTML="";
    }

    let tabuada=window.document.createElement("select"); //criando elemento select para mostrar resultado
    res.appendChild(tabuada);

    res.style.height+="200px"; //aumentando campo de resultado
    let resultado;
    for(let i=0; i<=numeroB; i++)
    {
        resultado = i*numeroA;
        let linha=window.document.createElement("option"); //criando elemento option que receberá a conta atual do loop 
        linha.innerHTML = `${i} X ${numeroA} = ${resultado}`;
        linha.value=`${i}tab` // todo option deve ter um value, imortante para outras linguagens web
        tabuada.size+=1; //aumentar size do select
        tabuada.appendChild(linha); //colocando linha dentro do select de resultado
    }
}

function limp(){   //limpar dados e resultados
    var res = document.getElementById("res");
    res.style="0px"; //POR QUE ISSO FUNCIONOU??

    let numA = document.getElementById("numA");
    numA.value="";
    let numB = document.getElementById("numB");
    numB.value="";

    res.removeChild(res.childNodes[0]);
        res.innerHTML="";
}
