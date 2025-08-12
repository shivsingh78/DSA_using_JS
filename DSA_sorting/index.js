// sort array in accending order
// let arr = [10, 5, 12, 1, 3];
// let n = arr.length;
// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - 1 - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }
// }
// console.log(arr);

// selection sort

// let arr = [10, 5, 12, 1, 3];
//  let n = arr.length;
//  for(let i=0; i<=n; i++){
//      let minIndex = i;
//      for(let j=i+1; j<n; j++){
//           if(arr[minIndex]> arr[j] ) minIndex =j;

//      }
//      if(minIndex != i){
//           [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]]
//      }
     
//  }
//  console.log(arr);
 
 // insertion sort
 let arr=[10, 5, 12, 1, 3];
 let n=arr.length;
 for(let i=1; i<n; i++){
     let key =arr[i]
     let j=i-1;
     while(j>=0 && arr[j]>key){
          arr[j+1] = arr[j];
          j--
     }
     arr[j+1] =key;
 }
 
 console.log(arr);
 


