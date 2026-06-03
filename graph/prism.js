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

function prism(graph,start){
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

console.log(graph,"A")