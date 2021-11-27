function Graph(v) {             
    this.vertices = v;  
    this.edges = 0;           
    this.adj = [];

    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }

    this.addEdge = addEdge;
    this.showGraph = showGraph;
}
    
   //Esto añade una arista  
function addEdge(v,w) {    
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}   
  //Muestra el grafo  
function showGraph() {             
    for (var i = 0; i < this.vertices; ++i) {
        console.log(i + " -> ");
        
        for (var j = 0; j < this.vertices; ++j){

            if (this.adj[i][j] != undefined){
                console.log(this.adj[i][j]);
            }      
        }
        console.log();
    }
}
 //la cantidad de vectores que contendra    
g = new Graph(5);  
//agar  
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);    
g.addEdge(2,4);
g.addEdge(4,1);
//muestra
g.showGraph();      