// let input = prompt("Enter a number : ");

// if (input === null) {
//   console.log("cancelled");
// } else {
//   if (isNaN(input)) {
//     console.log("invalid input");
//   } else {
//     if (input > 0) {
//       for (let i = 1; i <= input; i++) {
//         if (input % i === 0) {
//           console.log(i);
//         }
//       }
//     } else {
//       console.log("input should be positive and more than 0");
//     }
//   }
// }

// //  TODO:  calculate prime number

// function calculatePrimeNumber(){
//      let input=prompt("Enter a number")
//      if(input === null) return console.log("cancelled");

//      let num = parseInt(input,10)

//      if(!Number.isInteger(num) || num <=0){
//            console.log("Invalid input. Please enter a positive interger.");

//      }
//      let isPrime = true;

//     for (let i=2; i<=Math.floor(num/2); i++){
//      if(num % i ===0 ){
//            isPrime = false;
//            break;

//      }

//     }
//     console.log(isPrime);

// }

//  calculatePrimeNumber()

// TODO: precise apporach for finding prime Number

//  function isprime(inp){
//      if(inp<=1) return false;
//      if(inp === 2) return true;
//      if(inp%2 ===0) return false;
//      for(let i=3; i<Math.floor(Math.sqrt(inp)); i+=2){
//           if(inp%i === 0) return false;
//      }
//      return true;

//  }
//  console.log(isprime(8));

// TODO: sum of digit
// let n=12345
// let sum =0;
// while(n>0){
//      var rem = n%10;
//      sum +=rem;
//      n= Math.floor(n/10)

// }
// console.log(sum);

// TODO: reverse given number

// function reverseNumber(inp){
//      let rev=0;
//      while(inp>0){
//           let rem=inp%10
//           rev=rev*10 +rem;

//           inp = Math.floor(inp/10)
//      }
//      return rev;
// }
// console.log(reverseNumber(1234));

// TODO: Find Strong Number
// what is strong number: It is a number which is equal to it's factorial
// function strongNumber(inp){
//      let sum=0;
//      let copy = inp;
//      while(inp>0){

//           let rem=inp%10;
//           let fact=1;
//           for(let i=1; i<=rem; i++){
//                fact *=i
//           }
//           sum +=fact;
//      inp=Math.floor(inp/10)
//      }
//      console.log(sum);

//      if(copy === sum){
//           console.log( `${copy} number is a strong number`);

//      }
// }
// console.log(strongNumber(145));

// Repeat a number

// let promptValue;

// do {
//    promptValue = parseInt(prompt("Enter 0 to repeat 'hello':"));

// } while (promptValue !== 0);

// TODO: Guess the number game

// let randomValue = Math.floor(Math.random()*100) +1
// console.log(randomValue);
// let userInput = -1

// while(userInput !== randomValue){
//   userInput = parseInt(Number(prompt("Guess the value")))
//   if(isNaN(userInput) || userInput<1 || userInput>100){
//     console.log("try again b/w 1 to 100");
//   }

//     if (userInput > randomValue){
//       console.log("number is too high");

//     }else if(userInput < randomValue){
//       console.log("number is too low");

//     } else {
//       console.log("congrat you gussed right");

//     }

// }

// madam
// non-alphnumeric char-  it is that nor char nor number but symbol such as $%#@$ etc.

// function checkForPalindrome(char) {
//   const cleanChar = char.toLowerCase().replace(/[^a-z0-9]/g, "");

//   const reverse = cleanChar.split("").reverse().join("");

//   return cleanChar === reverse;
// }

// console.log(checkForPalindrome("A man, a plan, a canal: Panama"));
