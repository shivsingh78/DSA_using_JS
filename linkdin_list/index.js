class Node{
     constructor(value){
          this.value = value;
          this.next=null;
     }
}
class LinkedList {
     constructor() {
          this.head=null;
          this.length = 0;
     }

     //Add at end
     append(value){
          const newNode = new Node(value)
           if(!this.head){
          this.head = newNode;
     } else{
          let current = this.head;
          while (current.next) current = current.next;
          current.next=newNode;
     }
     this.length++
     }
     //at the begining
     prepend(value){
          const newNode=new Node(value)
          newNode.next=this.head
          this.head=newNode
          this.length++
          
     }
     insertAt(index,value){
          if(index<0 || index > this.length) return 
          //Insert at beginning
          if(index ===0) {
               console.log("using prepend");
               return this.prepend(value) 
               
          }
          //Insert at end
          if(index == this.length) {
               console.log("using append");
               return this.append(value)
               
          }
          
          //Insert in middle
          const newNode = new Node(value)
          let current=this.head;
          let prev=null;
          for(let i=0;i<index;i++){
               prev=current;
               current=current.next
          }
          prev.next=newNode
          newNode.next=current
          this.length++
     }

     delete(value){
          if(!this.head) return
          if(this.head.value === value){
               this.head=this.head.next;
               this.length--
               return
          }
          let current = this.head;
          while(current.next && current.next.value !== value){
               current=current.next
          }
          if(current.next){
               current.next=current.next.next;
               this.length--
          }
     }

     //Print list
     print(){
          let arr=[];
          let curr=this.head;
          while(curr) {
               arr.push(curr.value)
               curr= curr.next;
          }
          console.log(arr.join("->"));
          
     }

    
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.insertAt(1, 15);
list.delete(10)
list.insertAt(0,0)
list.insertAt(4,5)

list.print();   // 5 -> 15 -> 10 -> 20


class DLLNode{
     constructor(value){
          this.value=value;
          this.next=null;
          this.prev=null;
     }

}

class DoublyLinkedList{
     constructor(){
          this.head=null;
          this.tail=null;
     }
     append(value){
          const newNode=new DLLNode(value)
          if(!this.head ){
               this.head = this.tail = newNode
               return;
        }
     
       this.tail.next=newNode;
       newNode.prev=this.tail;
       this.tail=newNode;

     }
     //prepend
     prepend(value){
          const newNode=new DLLNode(value)
          if(!head){
               this.head=this.tail=newNode
               return;
          }
          newNode.next=this.head
          this.head.prev=newNode
          this.head=newNode
     }
     insertAt(index,value){
          if(index<0 ) return 
          const newNode=new DLLNode(value)
          if(!this.head){
               this.head=this.tail=newNode
               return
          }
          if(index===0) return this.prepend(value)
          let curr=this.head;
          let i=0
          while(i<index){
               curr=curr.next
               i++
          }
          let prevNode=curr.prev
          //Rewire pointer
          prevNode.next=newNode
          newNode.prev=prevNode

          newNode.next=curr
          curr.prev=newNode

     }
     deleteDLL(value){
          if(!this.head){
               return null
          }
          let curr=this.head
     while(curr){
          if(curr.val=== value){
               if(curr===this.head){
                    this.head=curr.next
                    if(this.head) this.head.prev=null
               }
               else if(curr===this.tail){
                    this.tail=curr.prev
                    if(this.tail) this.tail.next=null
               }else{
                    curr.prev.next=curr.next
                    curr.next.prev=curr.prev
               }
               return
          }
          curr=curr.next

     }

     }
      

}

