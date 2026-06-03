// weighted and undirected graph
class graph{
     constructor(){
          this.adjList={}

     }
     addVertix(vertex){
          if(!this.adjList[vertex]){
               this.adjList[vertex]=[]
          }
     }
     addEdge(vertex1,vertex2,weight){
          this.adjList[vertex1].push({
               node:vertex2,
               weight:weight
          })
          this.adjList[vertex2].push({
               node:vertex1,
               weight:weight
          })
     }
}

const Graph=new graph()
Graph.addVertix("A")
Graph.addVertix("B")
Graph.addVertix("C")
Graph.addVertix("D")
Graph.addVertix("E")
Graph.addVertix("F")

Graph.addEdge("A","B",2)
Graph.addEdge("A","C",4)
Graph.addEdge("B","D",7)
Graph.addEdge("B","C",1)
Graph.addEdge("C","E",3)
Graph.addEdge("D","F",1)
Graph.addEdge("E","F",5)
Graph.addEdge("E","D",2)

console.log(Graph.adjList)


function getminNode(dist,visited){
     let minNode=null;
     for(let vertex  in dist){
          if(!visited.has(vertex) && (minNode === null || dist[vertex] < dist[minNode] ) ){
               minNode=vertex
          }
     }
     return minNode
}
function findSortestPath(graph,source,visited){
     const dist={}
     const previous={}
     for(const vertex in graph){
          dist[vertex]=Infinity;
          previous[vertex]=null
     }
     dist[source]=0
     let current=getminNode(dist,visited)
     while(current !==null){
          visited.add(current)
          for(let neighbour of graph[current]){
               let nextNode=neighbour.node;
               let weight = neighbour.weight
               if(dist[current]+weight < dist[nextNode]){
                    dist[nextNode]=dist[current]+weight;
                    previous[nextNode]=current
               }
          }
          current=getminNode(dist,visited)
     }
     return {
          dist,
          previous
     }


    
}
const visited=new Set()
const result=findSortestPath(Graph.adjList,"A",visited)
console.log(result.dist)
console.log(result.previous)


//priority based DJ algorith

function djAlgo(graph,source){
     const priorityQueue=[]
     const dist={}
     const previous={}
     for(let vertex in graph){
          dist[vertex]=Infinity;
          previous[vertex]=null
     }
     dist[source]=0;
     priorityQueue.push([0,source])

     while(priorityQueue.length >0){
          priorityQueue.sort((a,b)=>a[0]-b[0])
          
          cosnt [currentDist,currentNode]=queue.shift()

          if(currentDist > dist[currentDist]){
               continue
          }

          for(const neighbour of graph[currentNode]){
               const nextNode=neighbour.node;
               const weight=neighbour.weight;

               const newDist=currentDist+weight;

               if(newDist<dist[newDist]){
                    dist[newDist]=newDist
                    previous[nextNode]=currentDist

                    priorityQueue.push([newDist,nextNode])
               }
          }
     }
     return {
          dist,
          previous
     }

}