var idade=42;
console.log(`Você tem ${idade} anos`)
if(idade<16){
    console.log("Não vota")
} else if(idade<18) { // primeiro termo idade>=16 é superfluo pois o if pai já garante essa condição    
     console.log("Voto Opcional")
    } else{
        console.log("Voto Obrigatório")
    }
