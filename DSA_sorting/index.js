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

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let curr=arr[i]
        let prev=i-1;
        while(prev>=0 && arr[prev] > curr){
            arr[prev+1] = arr[prev]
            prev--

        }
        arr[prev+1] = curr;
    }
    return arr
}
console.log(insertionSort([4,1,5,2,3]));

