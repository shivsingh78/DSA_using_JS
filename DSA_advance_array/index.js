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
