
    var resultadoA = document.getElementById("resPa");
    var resultadoB = document.getElementById("resPg");
    var emojiSeta = String.fromCodePoint(0x1F449) // \u{0x1f499} também funciona direto
    var emojiFim = String.fromCodePoint(0x1F3F4)

function pa(){
    if(resultadoA.innerHTML!=""){
        resultadoA.innerHTML="";
    }

    var ini = document.getElementById("inicio");
    var inicio = Number(ini.value);

    var fi = document.getElementById("fim");
    var fim = Number(fi.value);

    var pass = document.getElementById("passo");
    var passo = Number(pass.value)
    
    if(inicio==null||pass==null||fim==null||passo==0||fim==0){
        window.alert("Verifique os dados e tente novamente - Preencha todos os campos\nA quantidade de termos e a razão não podem ser 0");
        limparPa();
    }else{
        
    resultadoA.style.border="ridge";
    resultadoA.style.borderWidth="2px";
    resultadoA.style.borderColor="aquamarine";  
    resultadoA.style.height+="200px";
    for(var i=1; i<=fim; i++) // a atualização da variavel deve ser de algum tipo de incremento, auto referencia *= += ++ -- etc...
    {
        if(i!=fim){
            resultadoA.innerHTML+=`${inicio.toString()} ${emojiSeta}  `;
            inicio+=passo;
        } else {     
            resultadoA.innerHTML+=`${inicio.toString()} - ${emojiFim}`;
            inicio+=passo;
        }
    }
    }
}

function pg(){
    if(resultadoB.innerHTML!=""){
          resultadoB.innerHTML="";
    }

    var ini = document.getElementById("inicioB");
    var inicio = Number(ini.value);

    var fi = document.getElementById("fimB");
    var fim = Number(fi.value);

    var pass = document.getElementById("passoB");
    var passo = Number(pass.value)

    if(inicio==null||pass==null||fim==null||passo==0||passo==1||fim==0){
        window.alert("Verifique os dados e tente novamente - Preencha todos os campos\nA quantidade de termos não pode ser 0\nA razão não pode ser 0 nem 1");
        limparPg();
    }else{

    resultadoB.style.border="ridge";
    resultadoB.style.borderWidth="2px";
    resultadoB.style.borderColor="aquamarine";  
    resultadoB.style.height+="200px";
    for(var i=1; i<=fim; i++) // a atualização da variavel deve ser de algum tipo de incremento, auto referencia *= += ++ -- etc...
    {
        if(i!=fim){
            resultadoB.innerHTML+=`${inicio.toString()} ${emojiSeta}  `;
            inicio*=passo;
        } else {     
            resultadoB.innerHTML+=`${inicio.toString()} - ${emojiFim}`;
            inicio*=passo;
        }
    }
    }
}

function limparPa(){
    var form = window.document.getElementById("formPa");
    form.reset();
    resultadoA.innerHTML="";
    resultadoA.style-="-200px";
    resultadoA.style.border="none";
}


function limparPg(){
    var form = window.document.getElementById("formPg");
    form.reset();
    resultadoB.innerHTML="";
    resultadoB.style-="-200px";
    resultadoB.style.border="none";
}

