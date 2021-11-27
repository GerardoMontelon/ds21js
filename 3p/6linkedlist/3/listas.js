function node(data,next=null) {
    this.data = data
    this.next = null
 }
function linklist(){
    this.head =null;
    this.size=0;
    this.tail=null;
}


function Queue() 
{
    this.dataStore = linklist;
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
   
}

function enqueue(element)
{    
    var r= new node(element,null);
    this.head=r.data
    this.tail=r.next
    this.size++
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
    this.head;
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
var h= new Queue();
var contador=0,pasos=0,l=0,m=0;
while (contador < 7) {
    var start = new Date();
    for(var i=0;i<10000;i++){
        h.enqueue(Math.floor(Math.random() * 10000));
        pasos++;
    }
   
    
    var end = new Date() - start;
    
    console.log('Tiempo de ejecución ',end/10 ,'ms','Pasos:',pasos,'Nomero de Tabla:',contador);
    
    l+=end;
    m+=pasos
    
    pasos=0;
        contador++;
}
    console.log('Tiempo sumado:',l/10,'Pasos contados:',m );
    console.log('Tiempo Promediado:',(l/7),'ms','Pasos Promediados:',(m/7), '\n \n' );
