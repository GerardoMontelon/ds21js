//Gerardo Montelon Ramirez
let obj = {}
let arrayrandom=[];
let numeroale=100000;
var contador=0,l=0;
const add = (key, value) => obj[key] = value;
while (contador <= 7) {
for (var i=0; i<100000; i++){
  arrayrandom[i] = Math.floor(Math.random() * numeroale);
 
  
}
var start = new Date();
for (var i=0; i<100000; i++){
  
  add('name'+arrayrandom[i],arrayrandom[i])
  
}
var end = new Date() - start;
contador++;
l+=end;

}
console.log("Timepo deel objeto");
console.log('Tiempo promedio:',l/7,'ms');