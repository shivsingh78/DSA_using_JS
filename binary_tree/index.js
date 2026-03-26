class Node{
     constructor(value){
          this.value=value;
          this.left=null;
          this.right=null

     }
    
}
let index=0;
function buildBst(preOrder){
if (index >= preOrder.length) return null
let value=preOrder[index]
index++
if(value < 0) return null

let root=new Node(value)
root.left=buildBst(preOrder)
root.right=buildBst(preOrder)
return root
}

let tree=buildBst([1,2,-1,-1,3,4,-1,-1,5,-1,-1])

//  console.dir(tree.left)
//  console.dir(tree.right)

 //preOrder traversel
 function preOrder(root){
if(root === null) return 
//console.log(`${root.value},`)
preOrder(root.left)
preOrder(root.right)
 }
 preOrder(tree)

 //inOrder traversel
 function inOrder(root){
     if(root === null) return
     inOrder(root.left)
     // console.log(root.value)
     inOrder(root.right)

 }
//  inOrder(tree)

 //postOrder traversel
 function postOrder(root){
     if(root === null) return 
     postOrder(root.left)
     postOrder(root.right)
     // console.log(root.value);
     
 }
 postOrder(tree)

 //level order traversel
 function levelOrderTraversel(root){
const result=[]
if(!root){
     return result
}
const queue=[root]
while(queue.length >0){
     const currentLevel=[]
     const levelSize=queue.length
     for(let i=0;i<levelSize;i++){
          const node=queue.shift()
          currentLevel.push(node.value)
          if(node.left){
               queue.push(node.left)
          }
          if(node.right){
               queue.push(node.right)
          }
     }
     result.push(currentLevel)
}
return result
 }
// console.log( levelOrderTraversel(tree));

//Binary search Tree

function insert(root,val){
if(!root){
     return new Node(val)
}

if(val<root.value){
     root.left=insert(root.left,val)
}else if(val > root.value){
     root.right=insert(root.right,val)

}

return root


}

function buildBst(arr){
     let root=null
    for(let val of arr){
     root =insert(root,val)
    }
    return root
}

let buildTree=buildBst([3,2,1,5,6,4])


function inOrder(root){
     if(root){
            inOrder(root.left)
     console.log(root.value)
     inOrder(root.right)
     }
}
// inOrder(buildTree)
// console.log(buildTree)

function searchinBST(root,target){
     if(!root) return null
     else if(root.value === target){
          return root.value
     }
     else if(target <root.value){
          return searchinBST(root.left,target)
     }else{
          return searchinBST(root.right,target)
     }

}
// console.log(searchinBST(buildTree,5))


function findMinNode(node){
     while(node.left){
          node=node.left
     }
     return node
}
function deleteNode(root,key){
     if(!root) return null
     else if(root.value >key){
          root.left= deleteNode(root.left,key)
     }
     else if(root.value<key){
          root.right= deleteNode(root.right,key)
     }
     else{
          //case 1 : one child exist
          if(!root.left){
               return root.right
          }else if(!root.right){
               return root.left
          }

          //Case 2: two child exist
          let temp=findMinNode(root.right)
          root.value=temp.value
          root.right=deleteNode(root.right,temp.value)

     }
     return root
}
console.log("Before");

inOrder(buildTree)
deleteNode(buildTree,5)
console.log("After");

inOrder(buildTree)
