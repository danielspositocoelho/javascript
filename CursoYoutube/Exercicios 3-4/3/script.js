function pa(){
    var ini = document.getElementById("inicio");
    var inicio = Number(ini.value);

    var fi = document.getElementById("fim");
    var fim = Number(fi.value);

    var pass = document.getElementById("passo");
    var passo = Number(pass.value)

    var resultado = window.document.getElementById("resPa");
    
    for(var i=inicio; i<fim; i+=passo) // a atualização da variavel deve ser de algum tipo de incremento, auto referencia *= += ++ -- etc...
    {
        resultado.innerText+=`${i.toString()} --> `;
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
    
    for(var i=inicio; i<fim; i*=passo) // a atualização da variavel deve ser de algum tipo de incremento, auto referencia *= += ++ -- etc...
    {
        resultado.innerText+=`${i.toString()} --> `;
    }
    
}
