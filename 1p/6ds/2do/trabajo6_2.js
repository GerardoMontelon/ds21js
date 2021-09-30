//Gerardo Montelon Ramirez
let numeroale=100000;
var contador=0,l=0;
const map = new Map()
let ale=[];

while (contador <= 7) {
for (var i=0; i<100000; i++){
  ale[i] = Math.floor(Math.random() * numeroale);
 
  
}
var start = new Date();
for (var i=0; i<100000; i++){
  
  map.set('name'+ale[i],ale[i])
  
}
var end = new Date() - start;
contador++;
l+=end;

}

console.log('Tiempo promedio:',(l/7),'ms');