// bubble sort:- compare adjacent element
// function bubbleSort(arr){
//     for(let i=0; i<arr.length-1;i++){
        
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort([4,1,5,2,3]));

//selection sort

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let smallestIndex = i;
//         for(let j=i+1; j<arr.length;j++){
//             if(arr[j] < arr[smallestIndex]){
//                 smallestIndex=j
//             }
            
//         }
//         [arr[i],arr[smallestIndex]] = [arr[smallestIndex],arr[i]]
//     }
//     return arr
// }
// console.log(selectionSort([4,1,5,2,3]));

// insertion sort 

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let curr=arr[i]
//         let prev=i-1;
//         while(prev>=0 && arr[prev] > curr){
//             arr[prev+1] = arr[prev]
//             prev--

//         }
//         arr[prev+1] = curr;
//     }
//     return arr
// }
// console.log(insertionSort([4,1,5,2,3]));

//Merge sort & count inversion
// function conqor(arr,first,mid,last){
//     let temp = new Array(last-first+1);
//     let i=first,j=mid+1,k=0
//     let invCount=0
//     while(i<=mid && j<=last){
//         if(arr[i]<arr[j]){
//             temp[k++] = arr[i++]
//         } else{
//             temp[k++] = arr[j++]
//             invCount += mid-i+1
//         }
//     }
//     while(i<=mid){
//         temp[k++] = arr[i++]

//     }
//     while(j<=last){
//         temp[k++] = arr[j++]
//     }
//     let p=0,t=first;
//     while(p<temp.length){
//         arr[t++] = temp[p++]
//     }
//     return invCount
// }

// function divide(arr,first,last){
//     if(first >= last) return 0
//     let mid=Math.floor(first+(last-first)/2)
//     let leftInv=divide(arr,first,mid)
//     let rightInv=divide(arr,mid+1,last)
//     let invCount=conqor(arr,first,mid,last)
//     return leftInv+rightInv+invCount
// }
// let arr=[8,2,1,9,5,12,4,20]

// let totalInversionCount=divide(arr,0,arr.length-1)
// console.log(totalInversionCount);

// cyclic sort 

function cyclicSort(arr){
     let i=0
     while(i<arr.length){
         

          let currIndex =arr[i]-1
          if(arr[i] !== arr[currIndex]){
           [arr[i],arr[currIndex]]=[arr[currIndex],arr[i]]
          } else{
               i++
               
          }
     }
     return arr
}
console.log(cyclicSort([3,2,4,1]));
