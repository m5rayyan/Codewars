// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

const rowSumOddNumbers = (n) => Math.pow(n, 3);

// 1- Central polygonal numbers: b(n) = n^2 - n + 1
// 2- The sum of the n consecutive odd integers starting with b will be n(n+2a)= n^2 + n(b[n]−1)
// 1 in 2
// sum[n] = n^2 + n(n^2 - n + 1 - 1)
//        = n^2 + n(n^2 - n)
//        = n^2 + n^3 - n^2
//        = n^3
