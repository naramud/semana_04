// `For/Break/Continue` | Utilize a estrutura de repetição for para imprimir no console conforme instruções:
//a) números de 1 a 50
//b) quando chegar no número 25 interrompa a instrução e pare o loop
//c) quando chegar no número 10 pule a instrução|

//a)
//console.log('inicio')
for(let i = 1; i <= 50; i++) {
    console.log(`Com o for fiz ate o numero ${i}x`)
}
//console.log('fim!')

//b)
for(let i = 50; i > 0; i --) {
    console.log(i);
    if(i === 25) {
        break;
    }
}
console.log("Deu o break");

//c)
let counter = 0

 while (counter < 50){
     counter += 10
     
     if (counter === 10){
         console.log("CONTINUE")
         continue
     }
     console.log("Testando continue " + counter)
 }