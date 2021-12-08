function verificacao(){
//Calcular idade e pegar elementos
    var calendario = new Date();
    var ano = calendario.getFullYear(); // pega os 4 digits
    var anoNascimento = window.document.getElementById("anoNasc").value; 
    var idade = ano-anoNascimento;
    var resultado = window.document.getElementById("res");
    
    //check input anoNasc
    if (anoNascimento.length == 0 ||anoNascimento == 0 || anoNascimento >= ano ){
        window.alert("ERRO - Verifique o ano de nascimento");
    }else
    {

    //get radInput sex 
    if(document.getElementById("Masc").checked){         
        var sex = document.getElementById("Masc").value;
    }else if(document.getElementById("Fem").checked){
        var sex = document.getElementById("Fem").value;
    }
    /*
        Outra forma:
        var fsex = document.getElementsByName("radSexo")  --> seleciona o grupo de inputs rad com esse name, selecionamos o rad especifico por [index] na ordem em que aparece no html
        var gênero="";
        if (fsex[0].checked){
            gênero="homem"
        }else if (fsex[1].checked){
            gênero="mulher"
        }
    */
 //criando dinamicamente o img element
 var imagem = document.createElement('img'); //NO ARGUMENTO DE createElement VAI A TAG DO ELEMENTO A SER CRIADO
 imagem.setAttribute('id', 'ilustra');
 imagem.setAttribute('alt', 'Imagem Ilustrativa do Gênero e idade');
   
 if(sex == "masculino"){
       //checando idades para colocar src correta da img
       if(idade>=0 && idade<12){
           //criança
            imagem.setAttribute('src','homemCrianca.jpg');
       } else if(idade<21){
           //jovem
           imagem.setAttribute('src','homemJovem.jpg');
       } else if(idade<60){
           //adulto
           imagem.setAttribute('src','homemAdulto.jpg');
       } else{
           //idoso
           imagem.setAttribute('src','homemIdoso.jpg');
       }
            // alinhando com js
            resultado.style.textAlign="center";
            resultado.innerHTML=`Você é um homem de ${idade} anos`
            resultado.appendChild(imagem);

    }else if(sex == 'feminino') {

        if(idade>=0 && idade<10){
            //criança
             imagem.setAttribute('src','mulherCrianca.jpg');
        } else if(idade<21){
            //jovem
            imagem.setAttribute('src','mulherJovem.jpg');
        } else if(idade<60){
            //adulto
            imagem.setAttribute('src','mulherAdulta.jpg');
        }else{
            //idoso
            imagem.setAttribute('src','mulherIdosa.jpg');
        }
             // alinhando com js
             resultado.style.textAlign="center";
             resultado.innerHTML=`Você é uma mulher de ${idade} anos`
             resultado.appendChild(imagem);   
    }

    }
}