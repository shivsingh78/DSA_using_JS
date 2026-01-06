class Stack{
     constructor(){
          this.items=[]
     }
//Add element to stack
     push(element){
          this.items.push(element)
     }
//Remove element from stack
     pop(){
          if(this.isEmpty()){
               return "Stack is empty"
          }
         return  this.items.pop()
     }
//Return top element without removing
top(){
     if(this.isEmpty()){
          return "Stack is empty"
     }
     return this.items[this.items.length-1]
}
//check if stack is empty
isEmpty(){
     return this.items.length === 0
}
//return size of stack
size(){
     return this.items.length
}
clear(){
     this.items=[]
}
print(){
     console.log(this.items.join(" "))
}
     

}

let stack=new Stack()
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.top());   // 30
console.log(stack.pop());   // 30
console.log(stack.size());  // 2

stack.print();              // 10 20

