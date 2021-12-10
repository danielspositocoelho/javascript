function soma(n1,n2){ //funcao com dois parametros
    return n1+n2;
}

console.log(soma(2)) // chamada da função com apenas um parametro
// isso deixa um dos termos do return como um undefined ou NaN

//para corrigir, basta declarar qual o valor default do parametro caso ele não seja passado
function soma1(n1=0,n2=0){ //caso n1 ou n2 não seja passado elas teram o valor =0
    return n1+n1
}

//é possível guardar functions em variaveis como

let v = function(x) {
    return x*2
}

console.log(v(5))

//fatorial

function fatorial(n){
    let fat = 1
    for(let c=n; c>1;c--){        
     fat*=c                   
    }
    return fat;
}
/* A var fat(=1) é multiplicada e atualizada
 pela var n (argumento da funcao) a cada iteração, diminuindo 1 de n a cada passo,
  asism criamos  n! = n * n-1 * n-2 * n-3 ... */

  // fatorial com recursividade  --> um fatorial de um num pode ser calculado em termos do fat de outro n! = nx(n-1)!

  function fatorialr(n){
    if(n==1){
        return1
    }else{
        return n*fatorial(n-1)
    }
  }