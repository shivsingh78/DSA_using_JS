//bit manupulation :- bit bit manupulation means we perform operation on bits of number.
//if a number is odd then it's last bit is always 1 such as 7 = 111,9 = 1001.
//but a even number vice versa last bit is 0

//bitwise operator - &(AND)=both bit 1 and result 1,|(OR)=any one bit one and result 1 and ^(XOR)both bit different and result 1.
// console.log(6&10);
// console.log(6|10);
// console.log(6^10);



//left shift << 
//right shift >>

// let n=7;
// console.log(n<<1); //n*2^a here n=7 and a=1
// console.log(n>>1); //n/2^a here n=7 and a=1

//  Quick Reference Bit Tricks
// • `x & 1` → gives last bit (check odd/even).
// • `x >> 1` → right shift (divide by 2).
// • `x << 1` → left shift (multiply by 2).
// • `n & (n-1)` → removes the lowest set bit.
// • `n & -n` → extracts the lowest set bit.
// • `x ^ x = 0`, `x ^ 0 = x`.
// • `a ^ b` → finds differing bits (XOR).
// • Counting bits can be optimized with Kernighan’s algorithm.
// • Bitmasking is often used for subsets or DP state compression.
// • Use masks like `(1 << k)` to isolate the k-th bit.









