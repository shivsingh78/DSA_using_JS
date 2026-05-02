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
graph.addVertex("G");
graph.addVertex("H");

graph.addEdge("A", "B")
graph.addEdge("B", "C")
graph.addEdge("A", "D")
graph.addEdge( "D","C")
graph.addEdge("G","H")

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


//Detect cycle usig dfs
function cycleDetectionUsingDfs(graph,node,parent,visited){
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
// let visited=new Set()
// for(let node in graph.adjList){
//      if(!visited.has(node)){
//           if(cycleDetectionUsingDfs(graph.adjList,node,-1,visited)){
//                console.log("Cycle detected")
//                break;
//           }
//      }
// }

//Detect cycle using bfs 

function cycleDetectionUsingBfs(graph,start,visited){

const queue=[]
queue.push({node:start,parent:-1})
visited.add(start)
while(queue.length>0){
     const {node:curr,parent}=queue.shift()
     for(let neighbour of graph[curr]){
          if(!visited.has(neighbour)){
               visited.add(neighbour)
               queue.push({node:neighbour,parent:curr})
          }else if(neighbour !== parent){
               return true
          }
     }
     
}
return false
}

// let visited=new Set()
// for(let node in graph.adjList){
//      if(!visited.has(node)){
//           if(cycleDetectionUsingBfs(graph.adjList,node,visited)){
//             console.log("Cycle detected")
//             break;
//           }
//      }
// }

//Cycle detection in directed graph

function cycleDetectionInDirectedGraph(graph,node,visited,recurPath){
  visited.add(node)
  recurPath.add(node)
  for(let neighbour of graph[node]){
     if(!visited.has(neighbour)){
          if(cycleDetectionInDirectedGraph(graph,neighbour,visited,recurPath)){
               return true
          }
     }else if(recurPath.has(neighbour)){
          return true
     }
  }
  recurPath.delete(node)
  return false
}

let visited=new Set()
let recurPath=new Set()
for(let node in graph.adjList){
     if(!visited.has(node)){
          if(cycleDetectionInDirectedGraph(graph.adjList,node,visited,recurPath)){
               console.log("cycle detected")
               break;
          }
     }
}