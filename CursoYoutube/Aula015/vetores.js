let vetor =[5,8,4];
vetor[3]=6; //alocando mais um elemento no indice 3
vetor.push(7); // alocando mais um elemento no FINAL da array, sem precisar saber qual é o final

console.log(`O vetor tem ${vetor.length} posições`)
for (let i=0; i<vetor.length; i++){
    console.log(vetor[i])
}
console.log(`Iremos ordenar usando .sort\n`)
vetor.sort(); // ordena em sequencia crescente os elementos da .array

for (var i=0; i<vetor.length; i++){
    console.log(vetor[i])
}
console.log("\nExiste um jeito mais simples de mostrar o percurso de vetores e objetos usando\nFOR IN")
for(let pos in vetor){
    console.log(vetor[pos])
}
console.log("\n Para cada posição em vetor logar no console o elemento na posição\n Para cada VAR X in (dentro da) array, faça {}\nFor(let pos in vetor){\n    console.log(vetor[pos])\n}")
console.log("Iremos usar o método num.indexOf() para encontrar a posição do elemento de valor 8")//num.indexOf(valor); método para encontrar a posição do valor - retorna o index dele, ou -1, caso o valor não exista na array
console.log(`O valor 8 está na posição ${vetor.indexOf(8)} do vetor `);