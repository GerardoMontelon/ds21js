function Stack() {
    this.dataStore = []; 
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
function push(element) //Aumente de 1 en uno el array
{
    this.dataStore[this.top++] = element;
}

function peek() //Muesta lo que ahi en la ultima posicion
{
    return this.dataStore[this.top-1];
}

function pop() //elimina la ultima posiscion pero sirve para guardala en una variable
{
    return this.dataStore[--this.top];
}

function clear() //elimina todo el contenido
{
    this.top = 0;
}

function length() 
{
    return this.top;
}

var s = new Stack();
s.push("David");//se agrego
s.push("Raymond");//se agrego
s.push("Bryan");//se agrego
console.log("length: " + s.length());//se mostro cuanto contenido ahi en el array
console.log(s.peek());//se mostro ultima posicion
var popped = s.pop();//se elimino ultima posicion y gaurdo en una variable
console.log("The popped element is: " + popped);
console.log(s.peek());//se mostro ultima posicion
s.push("Cynthia");//se agrego
console.log(s.peek());//se mostro ultima posicion
s.clear();//se vacio el array
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());