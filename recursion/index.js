// Time complexity - It is a no. of operation is directly proportional to input .
// Recursion :-  a function calling itself .

// print 1 to n number.
// function print(arr, sIndex) {
//   //Termination condition
//   if (sIndex >= arr.length) {
//     return;
//   }
//   // Logic
//   console.log(arr[sIndex]);

//   //Recursive case
//   print(arr, sIndex + 1);
// }
// print([1, 2, 3, 4], 0);

// print n to 1 in reverse manner

// function reversePrint(arr, sIndex) {
// termination condition
//   if (sIndex >= arr.length) return;
// Recursive case
//   reversePrint(arr, sIndex + 1);
// Logic
//   console.log(arr[sIndex]);
// }
// reversePrint([1, 2, 3, 4], 0);

// factorial
// function fact(num) {
//   if (num <= 0) return 1
//   console.log(num);

//   return num * fact(num - 1);

// }
// console.log(fact(6));

// tower of hanoi problem
// s- source
// d- destination
// a- auxilary/helper

// function towerOfHanoi(n,fromRod,toRod,auxRod){
//      if(n==0 || n==1){
//           return n
//      }
//      let moves1=towerOfHanoi(n-1 ,fromRod , auxRod,toRod)
//      console.log(`Move disk ${n} from rod ${fromRod} to rod ${toRod}`);
//      let moves2=1
//      let moves3=towerOfHanoi(n-1,auxRod,toRod,fromRod)

//      return moves1+moves2+moves3;

// }
// console.log(towerOfHanoi(3, 'A','B','C'));

//fibonaci series
// case:1 print n serise

// function fibonaci(n, first, second) {
//   if (n === 0) return;
//   let third = first + second;
//   console.log(third);
//   fibonaci(n - 1, second, third);
// }
// let n = 5;
// let f = 0;
// let s = 1;
// console.log(f);
// console.log(s);

// fibonaci(n - 2, 0, 1);

// case:2 print sum of nth term
function fib(n){
     if (n===0 || n===1) return n
     
     return fib(n-1) + fib(n-2)
     
     
}
let n=10
console.log(fib(n));

