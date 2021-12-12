// em js array aceita todo tipo de valor, não precisa ser homogeneo
// o valor dos index é sempre fixo
//objetos são um pouco similares a arrays, na verdade toda array é antes um object
//declarando um objeto

//let amigo ={nome:'josé',sexo:'M', peso:85.4,engordar(p){} }

//a primeira casa tem um identificador literal! nesse caso NOME
// essa identificação é o atributo do objeto
//é possível guardar uma função em um atributo, um método! nesse caso o método engordar com paramento(p)

let amigo = {nome: 'José',
 sexo:'M',
 peso:85.4,
 engordar(p=0){
     console.log('Engordou')
     this.peso += p // this é um comando de autoreferencia, isso aqui significa amigo.peso
 }}
 amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
