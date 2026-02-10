// //Implement a Queue

// class Queue{
// constructor(){
//      this.items=[]
// }
// enQueue(element){
//      this.items.push(element)
// }
// deQueue(element){
// if(this.isEmpty()) return "Queue is empty"
// return this.items.shift()
// }
// front(){
//      return this.isEmpty() ? "Queue is empty" : this.items[0]
// }
// isEmpty(){
//      return this.items.length===0
// }
// size(){
//      return this.items.length
// }
// print(){
//      console.log(this.items.join(" <- "))
// }
// }

// const q=new Queue()
// q.enQueue(10)
// q.enQueue(40)
// q.enQueue(50)
// q.print()
// console.log(q.deQueue())
// console.log(q.size())
// console.log(q.front());

//Implement a queue using object
class Queue{
     constructor(){
          this.items={}
          this.frontIndex=0;
          this.rearIndex=0;

     }
     enqueue(element){
          this.items[this.rearIndex]=element
          this.rearIndex++
     }
     dequeue(){
          if(this.isEmpty()) return "Queue is Empty"
          const item=this.items[this.frontIndex]
          delete this.items[this.frontIndex]
          this.frontIndex++
          return item
     }
     size(){
          return this.rearIndex-this.frontIndex

     }
     front(){
          return this.isEmpty() ? "Queue is Empty " :  this.frontIndex
     }
     isEmpty(){
          return this.rearIndex === this.frontIndex
     }
}

const q=new Queue;
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)

console.log(q);
console.log(q.front());
console.log(q.dequeue());
console.log(q);

