function pa(){
    var ini = document.getElementById("inicio");
    var inicio = Number(ini.value);

    var fi = document.getElementById("fim");
    var fim = Number(fi.value);

    var pass = document.getElementById("passo");
    var passo = Number(pass.value)

    var resultado = window.document.getElementById("resPa");
    
    for(var i=1; i<=fim; i++) // a atualização da variavel deve ser de algum tipo de incremento, auto referencia *= += ++ -- etc...
    {
        if(i!=fim){
            resultado.innerHTML+=`${inicio.toString()} -->  `;
            inicio+=passo;
        } else {     
            resultado.innerHTML+=`${inicio.toString()} - FIM`;
            inicio+=passo;
        }
    }
    
}

function pg(){
    var ini = document.getElementById("inicio");
    var inicio = Number(ini.value);

    var fi = document.getElementById("fim");
    var fim = Number(fi.value);

    var pass = document.getElementById("passo");
    var passo = Number(pass.value)

    var resultado = window.document.getElementById("resPg");
    
    for(var i=1; i<=fim; i++) // a atualização da variavel deve ser de algum tipo de incremento, auto referencia *= += ++ -- etc...
    {
        if(i!=fim){
            resultado.innerHTML+=`${inicio.toString()} -->  `;
            inicio*=passo;
        } else {     
            resultado.innerHTML+=`${inicio.toString()} - FIM`;
            inicio*=passo;
        }
    }
}

