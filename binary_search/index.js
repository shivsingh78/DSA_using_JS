// function binarySearch(arr,target){
//      let first=0;
//      let last= arr.length-1
//      let mid=Math.floor((first+(last-first))/2)
//      if(arr[mid]===target) return mid
//      return arr[mid]>target
//      ?binarySearch(arr,target,first,last=mid-1)
//      :binarySearch(arr,target,first=mid+1,last)

// }

// console.log("index is found ");

// console.log(binarySearch([1,2,3,4,5,6,7,8],4)
// guess the number
// let pick = 6;
// function guess(num) {
//   if (num === pick) return 0;
//   return num > pick ? -1 : 1;
// }
// function guessNumber(n) {
//   let low = 1,
//     high = n;

//   while (low <= high) {
//     let mid = Math.floor(low + (high - low) / 2);
//     let res = guess(mid);
//     if (res === 0) return mid;
//     else if (res === -1) high = mid - 1;
//     else low = mid + 1;
//   }
//   return -1;
// }
// console.log(guessNumber(10));

// search in sorted arry
// function sortedSearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor(left + (right - left) / 2);
//     if (arr[mid] === target) return mid;
//check which part is sorted then apply binary search on it.
//left half sorted
//     if (arr[left] <= arr[mid]) {
//       if (arr[left] <= target && target <= arr[mid]) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     } 
//     // right half sorted
//     else {
//       if(arr[mid]<= target && target <=arr[right]){
//         left=mid+1
//       } else{
//         right=mid-1
//       }
//     }
//   }
//   return -1
// }

// console.log(sortedSearch([4,5,6,7,0,1,2],0));


//Peak index in a Mountain array
// function peakIndex(arr){
//   let left=1
//   let right=arr.length-2
//   while(left<=right){
//     let mid=Math.floor(left+(right-left)/2)
//     // if mid is a peak element then it must be greater then from it's left as well as right element.
//     if(arr[mid-1]<arr[mid]&& arr[mid]>arr[mid+1]) return mid;
//     //check whether mid lie in increasing order or decreasing order
//     else if(arr[mid-1] < arr[mid]){
//       left = mid+1

//     } else{
//       right=mid-1
//     }

//   }
//   return -1


// }
// console.log(peakIndex([0,2,1,0]));


// single element in a sorted array

// function singleElement(arr){
//   let left=0;
//   let n=arr.length
//   let right=n-1;
//   if(n==1) return arr[0]
//   while(left<=right){
//     let mid=Math.floor(left+(right-left)/2)

//     if(mid===0 && arr[mid] !== arr[mid+1]) return arr[mid]
//     if(mid=== n-1 && arr[n-1] !== arr[n-2]) return arr[mid]
//       if(arr[mid-1] !== arr[mid] && arr[mid] !== arr[mid+1]) return arr[mid]
//     if(mid%2===0){

//    if(arr[mid-1] === arr[mid]){
//       right=mid-1
//     } else{
//       left = mid+1
//     }
//   } else{
//     if(arr[mid-1] === arr[mid]){
//       left=mid+1
//     } else{
//       right=mid-1
//     }
//   }
//     }
//   return -1
// }
// console.log(singleElement([1,1,2,3,3,4,4,8,8]));

//book allocation problem

// function isValid(arr, n, m, maxAllowedPages) {
//   let students = 1, pages = 0;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] > maxAllowedPages) {
//       return false
//     }
//     if (pages + arr[i] <= maxAllowedPages) {
//       pages += arr[i]
//     }
//     else {
//       students++
//       pages = arr[i]

//     }

//   }
//   return students > m ? false : true;
// }
// function allocatPage(arr, n, m) {
//   if (m > n) {
//     return -1;
//   }
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += arr[i]
//   }
  
//   //range of possible answer
//   let ans = -1;
//   let start = 0, end = sum;
//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2)


//     if (isValid(arr, n, m, mid)) {
//       ans = mid;
//       end = mid - 1;
//     } else {
//       start = mid + 1
//     }

//   }
//   return ans



// }
// console.log(allocatPage([2, 1, 3, 4], 4, 2));

// painter's partition  problem
function isValid(arr,n,m,maxAllowedPartion){
  let painter=1,length=0
  for(let i=0; i<n; i++){
    if(arr[i] > maxAllowedPartion){
      return false
    }
    if(length+arr[i]<=maxAllowedPartion){
      length+=arr[i]
    }
    else{
      painter++
      length=arr[i]
    }
  }
  return painter >m ? false : true;
}
function painterPartition(arr,n,m){
  if(m>n){
    return -1;
  }
  let sum=0;
  for(let i=0 ; i<n; i++){
    sum += arr[i]
  }
  // range of possible answer
  let ans=-1
  let start=0,end=sum;
  while(start<=end){
    let mid= Math.floor(start+(end-start)/2)

    if(isValid(arr,m,n,mid)){
      ans=mid
      end=mid-1
    }else{
      start=mid+1
    }
  }
}
console.log(painterPartition[10,10,10,10],4,2);

