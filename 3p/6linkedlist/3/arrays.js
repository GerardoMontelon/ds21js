function Queue() 
{
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.clear=clear;
}

function enqueue(element)
{
    this.dataStore.push(element);
    
}
function clear(){
    this.dataStore.clear();
}
function dequeue() 
{
    return this.dataStore.shift();
}

function front()
{
    return this.dataStore[0];
}

function back() 
{
    return this.dataStore[this.dataStore.length-1];
}

function toString() 
{
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n";
}
    return retStr;
}

function empty() 
{
    if (this.dataStore.length == 0) 
{
    return true;
}
    else 
{
    return false;
}
}

 var q = new Queue();
 var contador=0,pasos=0,l=0,m=0;
 while (contador < 7) {
    var start = new Date();
    for(var i=0;i<10000;i++){
        q.enqueue(Math.floor(Math.random() * 10000));
        pasos++;
    }
   
    
    var end = new Date() - start;
    
    console.log('Tiempo de ejecución ',end/10 ,'ms','Pasos:',pasos,'Nomero de Tabla:',contador);
    
    l+=end; 
    m+=pasos;  
    pasos=0;
        contador++;
}

    console.log('Tiempo sumado:',l,"ms",'Pasos contados:',m );
    console.log('Tiempo Promediado:',(l/7),'ms','Pasos Promediados:',(m/7), '\n \n' );
