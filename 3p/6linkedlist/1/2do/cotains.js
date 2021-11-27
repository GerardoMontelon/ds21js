function Node(data) {
    this.data = data
    this.next = null
 }
 
 function Linked(n) {
     this.head = n
     this.tail = n
     this.size = 1
 
     this.getHead = getHead
     this.prepend = prepend
     this.append = append
     this.traverse = traverse
     this.contains = contains
 }
 
 function getHead(){
   return this.head
 }
 
 function prepend(n){
     n.next = this.head
     this.head=n
     this.size++
 }
 
 function append(n){
     n.next = null
     this.tail.next=n
     this.tail=n
     this.size++
 }
 
 function traverse(){
     let c=this.head
     while(c){
 
     console.log(c.data)
     c=c.next
     }
     console.log('\n')
 }
 
 
 
 function contains(element) {
 let l=this.head
 let p=false
 
 while(l){
 if (l.data==element ) {
 p=true;
 }
 l=l.next
 }
 console.log(p)
 }
 
 let n1=new Node('a')
 let n2=new Node('b')
 let l=new Linked(n1)
 
 l.prepend(n2)
 l.append( new Node('c'))
 l.traverse()
 l.prepend(new Node('d'))
 l.traverse(l.getHead())
 l.contains('a')
 l.contains('i')