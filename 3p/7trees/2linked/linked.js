function Node(k){            
    this.head=k
    this.lin=null
    this.nex=null
}

let a1 = new Node('-');        
let a2 = new Node(8);                  
let a3 = new Node(-5);

a1.lin = a2                    
a1.nex = a3

function inorder(u){        
   if (u!==null){
        inorder(u.lin);
        console.log(u.head);
        inorder(u.nex);
    }
}


function posorder(d){      
  if (d!==null){
        posorder(d.lin)
        posorder(d.nex)
        console.log(d.head);
    }
}


posorder(a1);  