// check given string is palidrome
// let string= "madam";
// let i=""
// let j=string.length-1
// let isPalidrome = true;

// while(i < j){
//      if(string.charAt(i) !== string.charAt(j)){
//           isPalidrome = false;
//           break;
//      }
//      i++;
//      j--
// }
// console.log(isPalidrome);

// reverse string without using extra space
// function reverseString(str){
//      const charArray=str.split('')
//      let left=0
//      let right=charArray.length-1
//      while(left < right){
//           [charArray[left],charArray[right]]=[charArray[right],charArray[left]]
//           left++;
//           right--
//      }
//      console.log(charArray.join(''));

// }
// reverseString("shiv")

// toggle - pass a string and if string is in lowercase then convert to upperCase and vice - versa;
// function toggle(str) {
//   let tog = "";
//   for (let i = 0; i < str.length; i++) {
//     // console.log(str[i]);

//     let char = str.charCodeAt(i);
//     if (char >= 65 && char <= 90) {
//       tog += String.fromCharCode(char + 32);
//     } else if (char >= 97 && char <= 122) {
//       tog += String.fromCharCode(char - 32);
//     }
//   }

//   console.log(tog);
// }

// toggle("ShivSinghBaghel");

// frequency of number same order in input and output
function frequencyOfNumber(str) {
  let arr = new Array(128).fill(0);
  const seenIndix = new Set()

  for (let i = 0; i < str.length; i++) {
    let index = str.charCodeAt(i);
    arr[index] += 1;
  }
  for (let i = 0; i < arr.length; i++) {
   let index = str.charCodeAt(i)
    if (arr[index] > 0 && !seenIndix.has(index)) {
      console.log(`${String.fromCharCode(index)} appears at ${arr[index]}`);
      seenIndix.add(index)
    }
  }
}

frequencyOfNumber("hello");
