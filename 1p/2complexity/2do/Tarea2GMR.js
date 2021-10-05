var c = 200;
var j = 2;
var numeroale=15;
var numerosPrimos = [2,3,5,7];

for (; j < c; j++) {

  if (j % 2 === 0 || j%3===0 || j%5===0 || j%7===0) {
    
  }else{
    numerosPrimos.push(j);
  }
  
}
console.log("Numero Primos")
console.log(numerosPrimos);




