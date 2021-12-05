var relogio = new Date();
var hora = relogio.getHours();
var fundo = window.document.body;
var seçãoT= window.document.getElementById("div#title");
var imagem= window.document.getElementById("img#imagem");
var seçãoC= window.document.getElementById("div#comment");
//rgba(255, 204, 75, 0.638)
if(hora>6 && hora<13)
{
    fundo.style.background="rgb(74, 199, 221)";
    seçãoT.innerHTML=`<h2>Agora são ${hora} horas</h2>`;
    imagem.src="manha.jpg";
} else if(hora<18)
        {
            fundo.style.background="rgba(255, 204, 75, 0.638)"

        } else 
          {
            fundo.style.background="rgb(40, 42, 172)"

          }