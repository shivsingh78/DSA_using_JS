//hashing
//ques. You have given an array with duplicate element in a array except one element and order of duplicate element is even .

// function findDuplicateElement(arr){
//      let set= new Set()
//      for(let i=0;i<arr.length;i++){
//           if(set.has(arr[i])){
//                set.delete(arr[i])
//           } else{
//                set.add(arr[i])
//           }
//      }
//      console.log(set);
     
// }
// let arr=[10,45,18,9,9,10,45,10,10]
// findDuplicateElement(arr)

// mp in js
// let map = new Map()

// map.set("name","shiv")
// map.set("age",18)
// map.set("isPassed",true)
// console.log(map);

// for(let key of map.keys()){
//      console.log(key);
     
// }

//Find frequency of a element in a array
// let map = new Map()

// let arr=[22,11,33,44,44,10,11,11,12]

// for(let i=0;i<arr.length;i++){
//      if(map.has(arr[i])){
//           map.set(arr[i],map.get(arr[i])+1)
//      }
//      else{
//           map.set(arr[i],1)
//      }
// }
// console.log(map);

//longest subarray with sum k

function longestSubarray(arr,k){
     let longest=0;
     let prefixSum =0;
     let map= new Map()
     map.set(prefixSum,-1)
     for(let i=0; i<arr.length;i++){
          prefixSum += arr[i]
          if(map.has(prefixSum-k)){
               let length = i-map.get(prefixSum-k)
              
                    longest = Math.max(length,longest)

               
          }
          if(!map.has(prefixSum)){
               map.set(prefixSum,i)
          }
     }
     return longest

}
console.log(longestSubarray([10,5,2,7,1,-10],15));

