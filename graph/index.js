//create a graph

class Graph {
     constructor() {
          this.adjList = {};
     }

     addVertex(vertex){
          if(!this.adjList[vertex]){
               this.adjList[vertex]=[]
          }
     }
     addEdge(v1,v2) {
          this.adjList[v1].push(v2)
          this.adjList[v2].push(v1)
     }
}

const graph = new Graph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B")
graph.addEdge("B", "C")
graph.addEdge("A", "D")
graph.addEdge( "D","C")

console.log(graph.adjList)

//bfs traversal :- finding shortest path in unweighted graph
function bfs(graph,start){
     const queue=[]
     const visited=new Set()
     queue.push(start)
     visited.add(start)

     while(queue.length>0){
          const node=queue.shift()
          console.log(node)
          for(let neighbour of graph[node]){
               if(!visited.has(neighbour)){
                    queue.push(neighbour)
                    visited.add(neighbour)
               }
          }
          
     }
}
// bfs(graph.adjList,Object.keys(graph.adjList)[0])

//dfs approach 1 using a stack :- explore all path, find a path 

function dfs(graph,start){
const stack=[]
const visited=new Set()
stack.push(start)
visited.add(start)
while(stack.length>0){
     const node=stack.pop()
     console.log(node)
     for(let neighbour of graph[node]){
          if(!visited.has(neighbour)){
               visited.add(neighbour)
               stack.push(neighbour)
          }
     }

}
}
//dfs(graph.adjList,Object.keys(graph.adjList)[0])

//dfs : Appraoch 2 using recursion 

function dfsTraversal(graph,node,visited=new Set()){
     if(visited.has(node)) return 
     console.log(node)

     visited.add(node)
     for(let neighbour of graph[node]){
          dfsTraversal(graph,neighbour,visited)
     }

}
// dfsTraversal(graph.adjList,Object.keys(graph.adjList)[0])

function cycleDetection(graph,node,parent,visited){
     console.log(node)
     visited.add(node)

     for(let neighbour of graph[node]){
          if(!visited.has(neighbour)){
               if(cycleDetection(graph,neighbour,node,visited)){
                    return true
               }

          }else if(neighbour !== parent){
               
                    return true
            
          }
     }
     return false

}
let visited=new Set()
for(let node in graph.adjList){
     if(!visited.has(node)){
          if(cycleDetection(graph.adjList,node,-1,visited)){
               console.log("Cycle detected")
               break;
          }
     }
}