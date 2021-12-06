function pickRandom(array){
    var aleatorio = Math.floor(Math.random()*array.length);
    return array[aleatorio];
    /* Math.floor(x) will return a number between 0 and 1, you can then time it up to get larger numbers.
//When using bigger numbers or array indexes remember to use Math.floor if you want it to be a integer
Math.floor(Math.random() * 10) // Will return a integer between 0 and 9
Math.floor(Math.random() * 11) // Will return a integer between 0 and 10

// You can make functions aswell 
function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min)) + min; // You can remove the Math.floor if you don't want it to be an integer
                              }
*/
}
function carregar()
{
var relogio = new Date();
var hora = relogio.getHours();
var minutos = relogio.getMinutes();
var fundo = window.document.body;
var imagem = window.document.getElementById("imagem");
var subtitulo = window.document.getElementById("titulo");
var comentario = window.document.getElementById("comentario");
var reflexoes = ["<p>Todos os grandes pensamentos são concebidos ao se caminhar.</p>","<p>As posições extremas não são seguidas de posições moderadas, e sim de posições contrárias.</p>","<p>O futuro influi no presente da mesma maneira que o passado.</p>","<p>O destino dos seres humanos é feito de momentos felizes e não de épocas felizes.</p>", "<p>Nossa honra não é construída por nossa origem, mas por nosso fim.</p>"
,"<p>Alegrando-se por nossa alegria, sofrendo por nosso sofrimento — assim se faz um amigo.</p>","<p>Falar muito de si mesmo pode ser uma forma de se ocultar.</p>",
"<p>Amigos deveriam ser mestres em adivinhar e calar: não se deve querer saber tudo.</p>","<p>A potência intelectual de um homem se mede pelo humor que ele é capaz de manifestar.</p>","<p> Os poços mais profundos vivem suas experiências lentamente: esperam um bom tempo até saberem o que caiu em suas profundezas.</p>","<p> Quem vê mal sempre vê pouco. Quem escuta mal sempre escuta demais</p>"]


if(hora>6 && hora<13)
{
    fundo.style.background="rgb(74, 199, 221)";
    imagem.src="/CursoYoutube/Exercicios 1-2/1/imagens/manha.jpg";
    subtitulo.innerHTML = `<h2>Agora são ${hora} horas e ${minutos} minutos <h2>`; // não podems atribuir valor para objetos sem especificar o atributo que será alterado, indicando [objeto].{propriedade}
    comentario.innerHTML=pickRandom(reflexoes); 
} else if(hora<18)
        {
            fundo.style.background="rgba(255, 204, 75, 0.638)"
            imagem.src="/CursoYoutube/Exercicios 1-2/1/imagens/tarde.jpg";
            subtitulo.innerHTML = `<h2>Agora são ${hora} horas<h2>`;
        } else 
          {
            fundo.style.background="rgb(40, 42, 172)"
            imagem.src="/CursoYoutube/Exercicios 1-2/1/imagens/noite.jpg";
            subtitulo.innerHTML = `<h2>Agora são ${hora} horas<h2>`;
          }   
}