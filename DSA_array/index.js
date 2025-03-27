//TODO: find first maximum and second maximum number in a array?
// Time Complexity: O(n)
// Space Complexity: O(1)

// function secondMaxNumber(arr) {
//   let firstMax = Math.max(arr[0], arr[1]); //60
//   let secondMax = Math.min(arr[0], arr[1]); //50
//   for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > firstMax) {
//       secondMax = firstMax;
//       firstMax = arr[i];
//     } else if (arr[i] > secondMax && firstMax !== arr[i]) {
//       secondMax = arr[i];
//     }
//   }
//   console.log(firstMax);
//   console.log(secondMax);
// }
// let newArr = [10, 20, 50,50,50, 50,50, 50];
// console.log(secondMaxNumber(newArr));

//TODO: second approach
// Time Complexity: O(n)
// Space Complexity: O(1)

// function firstMaxSecondMax(arr) {
//   let firstMax = -Infinity;
//   let secondMax = -Infinity;
//   for (let num of arr) {
//     if (num > firstMax) {
//       secondMax = firstMax;
//       firstMax = num;
//     } else if (num > secondMax && num !== firstMax) {
//       secondMax = num;
//     }
//   }
//   console.log(firstMax);
//   console.log(secondMax);
// }

// let newArr = [10, 20, 30, 40, 50, 4, 2, 2, 2, 10];
// console.log(firstMaxSecondMax(newArr));

// TODO: Reverse Array using Extra Space
// Time Complexity: O(n)
// Space Complexity: O(n)
// function reverseArray(arr) {
//   let newArr = new Array(arr.length);
//   let j = 0;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr[j] = arr[i];

//     j++;
//   }
//   return newArr;
// }

// console.log(reverseArray([1, 2, 3, 4, 7, 5, 6]));

//TODO: Reverse Array Without Extra Space
// Time Complexity: O(n)
// Space Complexity: O(1)

// function reverseArray(arr) {
//   let i = 0;
//   let j = arr.length - 1;

//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
//   return arr;
// }

// console.log(reverseArray([1, 2, 3, 4, 5, 6]));

// Another approach without using temporary variable

// function reverseArray(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     [arr[left],arr[right]] = [arr[right], arr[left]]
//     left++;
//     right--;
//   }
//   return arr;
// }
// console.log(reverseArray([1, 2, 3, 4, 5, 6]));

// function reverseArray(arr){
//   return arr.slice().reverse();
// }

// console.log(reverseArray([1, 2, 3, 4, 5, 6]));

// function rearrangeNumber(arr){
//      let i=0
//      let j=0;
//      while(i<arr.length){
//           if(arr[i] === 0){
//                let temp = arr[i];
//                arr[i] = arr[j];
//                arr[j] = temp;
//                j++
//           }
//           i++

//      }
//      console.log(arr);

// }
// console.log(rearrangeNumber([1,2,0,0,0,1,0,1,0,20]));

//TODO: h.w - move all negitive to left side and positive to right side

function findDuplicates(arr) {
    let arr2=[]
     for(let i=0; i<arr.length; i++){
          
    
          
         
     }
 }
console.log( findDuplicates([1,2,3,4,4,2,4,7,8,1]))


