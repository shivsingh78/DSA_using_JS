const { log } = require("console");

//print right angle triangle
// function rightangleTriangle(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let pattern = "";

//     for (let j = 1; j <= i; j++) {
//       pattern += "*";
//     }
//     console.log(pattern);
//   }
// }
// rightangleTriangle(5);

// using efficient approach
// function rightAngleTriangle(n){
//      for(let i=1; i<=n; i++){
//           console.log("*".repeat(i));

//      }
// }
// rightAngleTriangle(5)

// print reverse Of right-angle-triangle
// function reverseRightangleTriangle(rows) {
//   for (let i = rows; i >= 1; i--) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//       pattern += "*";
//     }
//     console.log(pattern);
//   }
// }
// reverseRightangleTriangle(5);

// using efficient approach
// function reverseRightangleTriangle(n){
//      for(let i=n; i>=1; i--){
//           console.log("*".repeat(i));

//      }
// }
// reverseRightangleTriangle(5)

// printing * pattern
const prompt = require("prompt-sync")();
// let n = parseInt(prompt("enter a number: "))
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i === j || i + j === n + 1) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

// printing V pattern
// let n = Number(prompt("enter a number : "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (j === i || j === n - i + 1) {
//       process.stdout.write("*");
//     }
//     process.stdout.write("_");
//   }

//   console.log();
// }

// printing pyramid pattern 
// for inverted pyramid reverse for loop

let n = prompt("ente a number : ")

for (let i = 1; i <=n ; i++) {
  console.log("_".repeat(n-i)+"*".repeat(2*i-1));
  
}


