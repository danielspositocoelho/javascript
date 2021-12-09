function calc(){
    let res = document.getElementById("res");
    let numA = document.getElementById("numA");
    let numeroA = Number(numA.value);        // tabuada desse num
    let numB = document.getElementById("numB");
    let numeroB = Number(numB.value);        // até esse num


    res.style.height+="200px";
    let tabuada=window.document.createElement("select");
    res.appendChild(tabuada);
    tabuada.setAttribute("label","RESULTADO DA TABUADA");
    let resultado;

    for(let i=0; i>=numeroB; i++)
    {
        resultado = i*numeroA;
        let linha=window.document.createElement("option");
        linha = `${i} X ${numeroA} = ${resultado}`;
        tabuada.appendChild(linha);

    }
}

function limp(){
    let res = document.getElementById("res");
    res.style.height-="200px";

    let numA = document.getElementById("numA");
    numA.value="";
    let numB = document.getElementById("numB");
    numB.value="";
}
