//implement prism algo 

class PriorityQueue {
     constructor(){
          this.values=[]
     }
     enqueue(val, priority) {
          this.values.push({val,priority})
          this.values.sort((a,b)=>a.priority-b.priority)
     }
     dequeue(){
          return this.values.shift()
     }
}

function prim(graph,start){
     const pq=new PriorityQueue()
     const visited=new Set()

     let cost = 0;
     pq.enqueue(start,0)

     while(pq.values.length){
          let {val,priority} = pq.dequeue()
          if(visited.has(val)) continue
          visited.add(val)
          cost+=priority;
          for(let neighbour of graph[val]){
               if(!visited.has(neighbour)){
                    pq.enqueue(neighbour.node,neighbour.weight)
               }
          }
     }
     return cost
}

const graph ={
     A:[
          {node: "B" , weight: 2},
          {node: "C" , weight: 6},
          {node: "D" , weight: 3},
     ],
     B:[
          {node:"A", weight: 2},
          {node:"D", weight: 8},
     ],
     C:[
          {node: "A", weight:6},
          {node: "D", weight:5},
     ],
     D:[
          {node:"A",weight:3},
          {node:"B",weight:8},
          {node:"C",weight:5}
     ]
}

//console.log(prim(graph,"A"))

//Implement DSU - Disjoint Set Union

class DisjointSet{
     constructor(size){
          this.parent=Array.from({length:size},(_,i)=>i)
          this.rank=new Array(size).fill(0)
     }
     find(i){
          if(this.parent[i]===i){
               return i
          }
          this.parent[i]=this.find(this.parent[i])
          return this.parent[i]
     }
     union(i,j){
          let rootI=this.find(i)
          let rootJ=this.find(j)
          if(rootI !== rootJ){
               if(this.rank[rootI]<this.rank[rootJ]){
                    this.parent[rootI]=rootJ
               }else if( this.rank[rootI]>this.rank[rootJ]){
                    this.parent[rootJ]=rootI
               }else{
                    this.parent[rootJ]=rootI
                    this.rank[rootI]++
               }
               return true
          }
          return false
               }
          connected(i,j){
               return this.find(i) === this.find(j)
          }
}

const dsu=new DisjointSet(5)
dsu.union(0,1)
dsu.union(1,2)
dsu.union(3,4)

console.log(dsu.connected(0,2));
console.log(dsu.connected(0,3));

dsu.union(0,3)
console.log(dsu.connected(0,4));


