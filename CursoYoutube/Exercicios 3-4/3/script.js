function contar(){
    var inicio = document.getElementById("inicio");
    var fim = document.getElementById("fim");
    var passo = document.getElementById("passo");
    var resultado = document.getElementById("res");
    
    for(vari=inicio.value; i<=fim.value; i*passo.value)
    {
        resultado.innerHTML=+`${i} --> `;
    }
    
}