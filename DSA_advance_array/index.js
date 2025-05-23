// Rotate array from left side ;

// function leftRotation(arr) {
//   let start = arr[0]
//   for (let i=0; i<arr.length-1; i++) {
//   arr[i] = arr[i+1]
//   }
//   arr[arr.length-1] = start

//   console.log(arr);
// }

// leftRotation([1, 2, 3, 4, 5, 6]);

// rotate array from right in k times;

// function twiceRightRotate(arr, k) {
//   k = k % arr.length;
//   let count = 0;
//   for (let j = 0; j < k; j++) {
//     count++;
//     let last = arr[arr.length - 1];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       arr[i] = arr[i - 1];
//     }
//     arr[0] = last;
//   }

//   console.log(arr);
//   console.log(count);
// }
// twiceRightRotate([1, 2, 3], 2);

// efficent algorith for left_rotating array without using nested loop
// function leftRotate(arr, k) {
//   let temp = new Array(arr.length);

//   for (let i = 0; i < arr.length; i++) {
//     temp[i] = arr[(i + k) % arr.length];
//   }

//   console.log(temp);
// }
// leftRotate([1, 2, 3], 2);

// best algo for  rotating array

// function leftRotate(arr, i, j) {
//   while (i < j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     i++;
//     j--;
//   }
// }
// let k = 2;
// let arr2 = [1, 2, 3, 4, 5];
// leftRotate(arr2, 0, k - 1);
// leftRotate(arr2, k, arr2.length - 1);
// leftRotate(arr2, 0, arr2.length - 1);
// console.log(arr2);

// function rightRotate(arr, i, j) {
//   while (i < j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     i++;
//     j--;
//   }
// }

// let k = 2;
// let arr3 = [1, 2, 3, 4, 5];
// rightRotate(arr3, 0, arr3.length - 1);
// rightRotate(arr3, 0, k - 1);
// rightRotate(arr3, k, arr3.length - 1);
// console.log(arr3);

//remove duplicate element from sorted array

// function removeDuplicateFromSorted(arr) {
//   let j = 1;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] != arr[i + 1]) {
//       arr[j] = arr [i + 1];
//       j++;
//     }
//   }
//   arr.length=j
//   console.log(arr);
//   console.log(j);
// }
// console.log(removeDuplicateFromSorted([0, 0, 1, 1, 2, 2, 3, 3]));

// merge two sorted array

// function mergeTwoSortedArray(arr1, arr2) {
//   let merge = new Array(arr1.length + arr2.length);
//   let i = j = k = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       merge[k++] = arr1[i++];
//     } else {
//       merge[k++] = arr2[j++];
//     }
//   }
//   while (j < arr2.length) {
//     merge[k++] = arr2[j++];
//   }
//   while (i < arr1.length) {
//     merge[k++] = arr1[i++];
//   }
//   console.log(merge);
// }
// mergeTwoSortedArray([1, 2, 3, 4], [6, 7, 8, 9]);

// best time to buy and sell stock

// function bestTimeToBuyAndSellStock(arr) {
//   let maxProfit = 0;
//   let minProfit = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minProfit) {
//       minProfit = arr[i];
//     }
//     let profit = arr[i] - minProfit;

//     maxProfit = Math.max(maxProfit, profit);
//   }
//  console.log(maxProfit);

// }

// bestTimeToBuyAndSellStock([2, 4, 1]);

//TODO: leetcode: best time to buy and sell stock problem 2,3,etc.

// function Sort(arr) {
//   let j = 0;
//   let k = arr.length-1 ;
//   let i = 0;
//   while (i <= k)
//     if (arr[i] === 0 ) {
//       [arr[j], arr[i]] = [arr[i], arr[j]];
//       j++;
//       i++;
//     } else if (arr[i] === 2) {
//       [arr[k], arr[i]] = [arr[i], arr[k]];
//       k--;
//     } else {
//       i++;
//     }
//   console.log(arr);
// }

// Sort([2, 0, 2, 1, 1, 0]);

// maximum sub_array using Kadane's Algorithm
// function subArray(arr) {
//   let sum = 0;
//   let maxSum = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];

//     if (sum > maxSum) {
//       maxSum = sum;
//     }
//     if (sum < 0) {
//       sum = 0;
//     }
//   }
//   return maxSum;
// }
// console.log(subArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Majority Element
// function MajorityElement(arr){
//   let count =1;
//   let ans = arr[0]
//   for(let i=1; i<arr.length; i++){
//    if(count === 0){
//     ans = arr[i]
//     count++
//    }
//    else if(arr[i]=== ans) {

//     count++;
//    }
//    else {
//     count--
//    }

//   }
//   return ans
// }
// console.log(MajorityElement([3,2,3]));

// traping rain water

// function trapingRainWater(arr) {
//   let left = new Array(arr.length);
//   let right = new Array(arr.length);

//   let maxLeft = arr[0],
//     maxRight = arr[arr.length - 1];
//   left[0] = maxLeft;
//   right[right.length - 1] = maxRight;
//   for (let i = 1; i < arr.length; i++) {
//     maxLeft = Math.max(arr[i], maxLeft);
//     left[i] = maxLeft;
//   }
//   for (let i = arr.length - 2; i >= 0; i--) {
//     maxRight = Math.max(arr[i], maxRight);
//     right[i] = maxRight;
//   }
//   let ans = 0;
//   for (let i = 0; i < arr.length; i++) {
//     ans += Math.min(left[i], right[i]) - arr[i];
//   }
//   console.log(ans);
// }

// trapingRainWater([4, 2, 0, 3, 2, 5]);

//Multiple two sum Optimize approach;

// function multipleTwoSum(arr,target){
//   let map = new Map();
//   let result=[]
//   for(let i=0; i<arr.length;i++){
//     let compliment = target - arr[i];
//     if(map.has(compliment)){

//       result.push(map.get(compliment),i)
//     }
//     else{
//       map.set(arr[i],i)
//     }
//   }
//   return result
// }
// console.log(twoSum([2,8,11,15,7,1],9));

// product of Array Except Self
// O(n) time and O(n) space
// var productExceptSelf = function (nums) {
//   const n = nums.length;
//   const output = Array(n).fill(1);
//   let prefix = 1;
//   for (let i = 1; i < n; i++) {
//      prefix *= nums[i-1];
//      output[i]=prefix

//   }
//   let suffix = 1;
//   for (let i = n - 2; i >= 0; i--) {
//      suffix *= nums[i+1];
//      output[i] = suffix

//   }
//   return output;
// };

// console.log(productExceptSelf([1, 2,6]));

function pairSortedSum(arr) {
  arr.sort((a, b) => a - b);
  let ans = arr[0];
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      count = 1;
      ans = arr[i];
    }
    if(ans> arr.length/2){
      return ans
    }
  }
  
  
}
console.log(pairSortedSum([1, 1, 8, 1, 2, 4, 1, 5]));
